import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, FlatList, Alert, Text,
} from 'react-native';
import SearchBar from '../../Components/SearchBar';
import ListItem from '../../Components/ListItem';
import { CommonStyles, maskMoney } from '../../commonValues';
import { firebaseDatabase } from '../../../utils/firebase';
import '../../fixtimerbug'; // <<<<<<<<<<<<<<<<<<

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonStyles.backGroundColor,
  },
  searchView: {
    padding: 20,
  },
  list: {
    flex: 1,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: CommonStyles.separator,
  },
});
const separator = () => <View style={styles.separator} />;

const Produtos = () => {
  const [searchValue, setSearchValue] = useState('');
  const [productList, setProductList] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMounted = React.useRef(true);
  const [mySaldo, setMySaldo] = useState(0);
  const updateList = () => {
    firebaseDatabase.ref('data').once('value', (dataSnapshot) => {
      const items = [];
      dataSnapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        items.push(item);
      });
      setLoading(false);
      setProductList(items);
      setData(items);
    });
  };

  const getSaldo = () => {
    firebaseDatabase.ref('user').once('value', (dataSnapshot) => {
      const { saldo } = dataSnapshot.val();
      setMySaldo(saldo);
    });
  };

  const valueChanged = (value) => {
    setSearchValue(value);
    const dataFilterd = data.filter((item) => {
      if (item.financialInstitutionName.toLowerCase().includes(value.toLowerCase())
      || item.productName.toLowerCase().includes(value.toLowerCase())) { return true; }
      return false;
    });
    setProductList(value !== '' ? dataFilterd : data);
  };

  useEffect(() => {
    updateList();
    getSaldo();
  }, []);

  useEffect(() => () => {
    isMounted.current = false;
  }, []);


  const renderList = ({ item }) => {
    const {
      financialInstitutionName, productName,
      profitability, productTypeId,
    } = item;
    return (
      <ListItem
        financialInstitutionName={financialInstitutionName}
        productName={productName}
        saldoText={maskMoney(mySaldo)}
        profitability={profitability}
        productTypeId={productTypeId}
        onPress={() => Alert.alert(financialInstitutionName, productName)}
      />
    );
  };

  const nonItem = (
    <View style={{
      width: '100%', marginTop: 10, justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Text style={{ fontFamily: CommonStyles.fontMedium }}>Nada encontrado!</Text>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <SearchBar
          text={searchValue}
          onChangeText={value => valueChanged(value)}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={productList}
          renderItem={renderList}
          keyExtractor={item => item.portfolioProductId.toString()}
          refreshing={loading}
          onRefresh={updateList}
          ItemSeparatorComponent={separator}
          ListEmptyComponent={nonItem}
        />
      </View>
    </View>
  );
};

export default Produtos;
