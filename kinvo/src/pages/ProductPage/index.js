import React, { Component } from "react";
import ProductApi from "../../service/products/ProductApi";
import Presentational from "./presentational";

export default class Products extends Component {
  constructor(props) {
    super(props);
    datasource = [];
    this.state = { data: "", isFetching: false, datasource, searchText: "" };
  }

  async componentDidMount() {
    await this.getProducts();
  }

  getProducts = async () => {
    this.setState({ isFetching: true });
    let response;
    try {
      response = await ProductApi.getProducts();
    } catch (error) {
      // Tratamento do erro
    }
    let dataApi = response.data.data;
    var data = [];
    dataApi.map(item => {
      data.push({
        key: item.portfolioProductId.toString(),
        productTypeId: item.productTypeId,
        productName: item.productName,
        financialInstitutionName: item.financialInstitutionName,
        equity: item.equity,
        profitability: item.profitability
      });
    });

    await this.setState({
      data: data,
      datasource: data,
      isFetching: false,
      text: ""
    });
  };

  onRefresh = () => {
    this.setState({ searchText: "" });
    this.getProducts();
  };

  searchFilterFunction = searchText => {
    const newData = this.state.data.filter(item => {
      const itemData = item.productName.toUpperCase();

      const textData = searchText.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ datasource: newData, searchText });
  };

  render() {
    const { searchFilterFunction, onRefresh } = this;

    return React.createElement(Presentational, {
      ...this.state,
      searchFilterFunction,
      onRefresh
    });
  }
}
