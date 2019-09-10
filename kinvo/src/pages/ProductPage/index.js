import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import Product from "./components/ProductItem";
import ProductApi from "../../service/products/ProductApi";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import styles from "./styles";

export default class Products extends Component {
  constructor(props) {
    super(props);
    datasource = [];
    this.state = { data: "", isFetching: false, datasource, text: "" };
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

    await this.setState({ data: data, datasource: data, isFetching: false });
  };

  onRefresh() {
    this.setState({ text: "" });
    this.getProducts();
  }

  searchFilterFunction = text => {
    const newData = this.state.data.filter(item => {
      const itemData = item.productName.toUpperCase();

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ datasource: newData, text });
  };

  renderSearchBar = () => {
    return (
      <View style={styles.searchBarContainer}>
        <SearchBar
          platform={"android"}
          containerStyle={styles.searchBarContainerStyle}
          inputContainerStyle={styles.searchBarInputContainerStyle}
          value={this.state.text}
          onChangeText={text => this.searchFilterFunction(text)}
          lightTheme
          round
          autoCorrect={false}
          clearIcon={false}
          cancelIcon={<Icon name="search" color="#9DA5AC" size={22} />}
          searchIcon={<Icon name="search" color="#9DA5AC" size={22} />}
        />
      </View>
    );
  };

  renderFlatList = () => {
    return (
      <FlatList
        data={this.state.datasource}
        onRefresh={() => this.onRefresh()}
        refreshing={this.state.isFetching}
        renderItem={({ item }) => <Product item={item} />}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  renderLoading = () => <ActivityIndicator size="large" color={"black"} />;

  renderContent = () => {
    const { isFetching } = this.state;

    if (isFetching) return this.renderLoading();
    else return this.renderFlatList();
  };

  render() {
    const searchBar = this.renderSearchBar();
    const content = this.renderContent();
    return (
      <View style={styles.container}>
        {searchBar}
        {content}
      </View>
    );
  }
}
