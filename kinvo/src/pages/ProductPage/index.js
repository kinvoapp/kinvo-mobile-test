import React, { Component } from "react";
import ProductApi from "../../service/products/ProductApi";
import Presentational from "./presentational";
import { formatMoney, formatProfitability } from "../../util/formatter";
import ProductType from "../../util/productType";

export default class Products extends Component {
  constructor(props) {
    super(props);
    searchedProducts = [];
    this.state = {
      formattedProducts: "",
      isFetching: false,
      searchedProducts,
      searchText: "",
      error: false
    };
  }

  async componentDidMount() {
    await this.getProducts();
  }

  getProducts = async () => {
    this.setState(prevState => ({
      ...prevState,
      isFetching: true
    }));
    try {
      const response = await ProductApi.getProducts();
      const httpResponse = response.data;
      const products = httpResponse.data;

      const formattedProducts = this.formatProducts(products);

      await this.setState({
        formattedProducts: formattedProducts,
        searchedProducts: formattedProducts,
        isFetching: false,
        searchText: ""
      });
    } catch (error) {
      this.handleError();
    }
  };

  handleError = () => {
    this.setState(prevState => ({
      ...prevState,
      error: true
    }));
  };

  formatProducts = products => {
    let formattedProducts = [];
    products.map(product => {
      formattedProducts.push({
        key: product.portfolioProductId.toString(),
        productTypeId: product.productTypeId,
        productName: product.productName,
        financialInstitutionName: product.financialInstitutionName,
        equity: formatMoney(product.equity),
        profitability: formatProfitability(product.profitability),
        colorOfProduct: ProductType.getColor(product.productTypeId)
      });
    });

    return formattedProducts;
  };

  onRefreshProductsList = () => {
    this.clearSearchText();
    this.getProducts();
  };

  clearSearchText = () => {
    this.setState(prevState => ({
      ...prevState,
      searchText: ""
    }));
  };

  filterProducts = searchText => {
    const { formattedProducts } = this.state;

    matchesSearch = product => {
      const productName = product.productName.toUpperCase();

      const searchedText = searchText.toUpperCase();

      const productMatch = productName.indexOf(searchedText) > -1;
      return productMatch;
    };

    const searchedProducts = formattedProducts.filter(matchesSearch);

    this.setState(prevState => ({
      ...prevState,
      searchedProducts,
      searchText
    }));
  };

  render() {
    const { filterProducts, onRefreshProductsList } = this;

    return React.createElement(Presentational, {
      ...this.state,
      filterProducts,
      onRefreshProductsList
    });
  }
}
