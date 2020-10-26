import React, {Component} from 'react';
import api from '../services/api';

import {View, StyleSheet, Text, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';

import Footer from '../components/footer';
import HeaderTitle from '../components/headerTitle';
import HeaderLeft from '../components/headerLeft';

export default class Main extends Component {
  static navigationOptions = {
    headerTitle: () => <HeaderTitle />,
    headerLeft: () => <HeaderLeft />,
    headerTitleAlign: 'center',
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 0,
    },
  };
  state = {
    data: [],
    loading: false,
    search: '',
    filteredData: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        loading: true,
      };
    });
    const response = await api.get('/getProducts');

    const {data} = response.data;

    this.setState((prevState) => {
      return {
        ...prevState,
        data,
        filteredData: data,
        loading: false,
      };
    });
  };

  renderItem = ({item}) => {
    let itemColor = '';
    switch (item.productTypeId) {
      case 1:
        itemColor = '#008DCB';
        break;
      case 2:
        itemColor = '#D5A82C';
        break;
      case 3:
        itemColor = '#94E5D2';
        break;
      case 4:
        itemColor = '#86B2DE';
        break;
      case 5:
        itemColor = '#5AAAD5';
        break;
      case 6:
        itemColor = '#38BFA0';
        break;
      case 7:
        itemColor = '#3E71B9';
        break;
      case 8:
        itemColor = '#4C309B';
        break;
      case 9:
        itemColor = '#86B2DE';
        break;
      case 10:
        itemColor = '#B9B42C';
        break;
      case 11:
        itemColor = '#4141D5';
        break;
      case 12:
        itemColor = '#9390E5';
        break;
    }
    return (
      <View style={styles.productContainer}>
        <View style={styles.productContainerContent}>
          <Text style={[styles.financialInstitutionName, {color: itemColor}]}>
            {item.financialInstitutionName}
          </Text>
          <View style={styles.productNameContainer}>
            <View
              style={[styles.sideProductNameBar, {backgroundColor: itemColor}]}
            />
            <Text style={styles.productName}>{item.productName}</Text>
          </View>
          <View style={styles.equityProfitabilityContainer}>
            <View style={styles.equityContainer}>
              <Text style={styles.saldoText}>Saldo atual</Text>
              <Text style={[styles.equityText, {color: itemColor}]}>
                R${item.equity}
              </Text>
            </View>
            <View style={styles.profitabilityContainer}>
              <Text style={styles.rentabilidadeText}>Rentabilidade</Text>
              <Text style={[styles.profitabilityText, {color: itemColor}]}>
                {item.profitability}%
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  updateSearch = (search) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        search,
      };
    });
    this.filterProductsBySearchKey(search);
  };

  filterProductsBySearchKey = (search) => {
    const isSearchEmpty = '';
    if (isSearchEmpty) {
      this.setState((prevState) => {
        return {
          ...prevState,
          filteredData: this.state.data,
        };
      });
    } else {
      const {data} = this.state;
      const filteredData = data.filter((item) => {
        return (
          item.productName.includes(search) ||
          item.financialInstitutionName.includes(search)
        );
      });
      this.setState((prevState) => {
        return {
          ...prevState,
          filteredData: filteredData,
        };
      });
      this.updateSearch;
    }
  };

  render() {
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          onChangeText={this.updateSearch}
          searchIcon={{size: 30}}
          value={search}
          lightTheme={true}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBar}
        />
        <FlatList
          data={this.state.filteredData}
          keyExtractor={(item, index) => `list-item-${index}`}
          renderItem={this.renderItem}
        />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FA',
    justifyContent: 'space-around',
  },
  searchBarContainer: {
    backgroundColor: '#F5F8FA',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 40,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 17,
    marginRight: 17,
  },
  productContainer: {
    backgroundColor: 'white',
    marginBottom: 4,
    marginLeft: 0,
    marginRight: 0,
  },
  productContainerContent: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  productNameContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 7,
  },

  financialInstitutionName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  sideProductNameBar: {
    width: 6,
    marginRight: 5,
    borderRadius: 20,
  },

  productName: {
    color: '#707B81',
    fontWeight: 'bold',
    fontSize: 14,
  },

  equityProfitabilityContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  equityContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },

  saldoText: {
    color: '#707B81',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },

  equityText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  profitabilityContainer: {
    alignItems: 'flex-end',
  },

  rentabilidadeText: {
    color: '#707B81',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },

  profitabilityText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
