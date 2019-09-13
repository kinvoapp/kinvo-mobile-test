import React from "react";
import PropTypes from "prop-types";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import Product from "./components/ProductItem";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import styles from "./styles";

export default function Presentational(props) {
  const {
    isFetching,
    filteredProducts,
    filterProducts,
    onRefreshProductsList,
    searchText,
    error
  } = props;

  renderLoading = () => <ActivityIndicator size="large" color={"black"} />;

  renderFilteredProductsList = () => (
    <FlatList
      data={filteredProducts}
      onRefresh={() => onRefreshProductsList()}
      refreshing={isFetching}
      renderItem={renderProduct}
      showsVerticalScrollIndicator={false}
    />
  );

  renderProduct = ({ item }) => <Product formattedItem={item} />;

  renderSearchBar = () => {
    return (
      <View style={styles.searchBarContainer}>
        <SearchBar
          platform={"android"}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          value={searchText}
          onChangeText={searchText => filterProducts(searchText)}
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

  renderEmptyList = () => (
    <Text style={styles.textEmptyProductList}>Nenhum Produto Encontrado</Text>
  );

  renderError = () => (
    <Text style={styles.textError}>
      Parece que temos alguns gatos bagunçando o sistema
    </Text>
  );

  const renderContent = () => {
    const isEmptyFilterProducts = filteredProducts.length === 0;

    if (error) {
      return renderError();
    }
    if (isFetching) {
      return renderLoading();
    }
    if (isEmptyFilterProducts) {
      return renderEmptyList();
    }
    return renderFilteredProductsList();
  };

  const content = renderContent();
  const searchBar = renderSearchBar();

  return (
    <View style={styles.container}>
      {searchBar}
      {content}
    </View>
  );
}

Presentational.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  filteredProducts: PropTypes.array,
  filterProducts: PropTypes.func.isRequired,
  onRefreshProductsList: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  error: PropTypes.bool.isRequired
};

Presentational.defaultProps = {
  searchText: "",
  filteredProducts: []
};
