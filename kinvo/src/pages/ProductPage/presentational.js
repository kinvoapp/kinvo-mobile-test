import React from "react";
import PropTypes from "prop-types";
import { View, FlatList, ActivityIndicator } from "react-native";
import Product from "./components/ProductItem";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import styles from "./styles";

export default function Presentational(props) {
  const {
    isFetching,
    datasource,
    searchFilterFunction,
    onRefresh,
    searchText
  } = props;

  renderLoading = () => <ActivityIndicator size="large" color={"black"} />;

  renderFilteredProductsList = () => (
    <FlatList
      data={datasource}
      onRefresh={() => onRefresh()}
      refreshing={isFetching}
      renderItem={({ item }) => <Product item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );

  renderSearchBar = () => {
    return (
      <View style={styles.searchBarContainer}>
        <SearchBar
          platform={"android"}
          containerStyle={styles.searchBarContainerStyle}
          inputContainerStyle={styles.searchBarInputContainerStyle}
          value={searchText}
          onChangeText={searchText => searchFilterFunction(searchText)}
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

  const renderContent = () => {
    if (isFetching) {
      return renderLoading();
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
  datasource: PropTypes.array,
  searchFilterFunction: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

Presentational.defaultProps = {
  text: "",
  datasource: [],
  isFetching: true
};
