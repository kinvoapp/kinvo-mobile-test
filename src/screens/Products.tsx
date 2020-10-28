import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { formatCurrency } from '../utils/formatCurrency';

import { SearchBar } from 'react-native-elements';
import  { colorScheme } from '../styles/ColorScheme';
import api from '../services/api';


export default function Products() {

  //Tipagem dos dados da API
  interface Products {
  
    portfolioProductId: number,
    productName: string,
    financialInstitutionName: string,
    equity: number,
    profitability: number,
    productTypeId: number,

  }

  //Declarando estados com React Hooks
  const isCancelled = useRef(false);
  const [products, setProducts] = useState<Products[]>([]); 
  const [searchResults, setSearchResults] = useState<Products[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  
//Buscando dados na API
const getData = async () => {
  await api.get('').then(response =>{ 
    const res = response.data;
    if(!isCancelled.current) {

    setProducts(res.data);  
    
    }
  });
}


  useEffect(() => {
    
      
    getData();
    
    
    //Filtro de produtos
    if (searchTerm === ('')) {
      setSearchResults(products)
      
    } else {
      
      const results = products.filter(searchValue =>
        searchValue.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setSearchResults(results);
    }

    return () => {
      isCancelled.current = true;
    };
           
  }, [searchTerm]);
  
  
  
  return (

    <>
      <SearchBar 
          searchIcon={{size: 40}}
          inputContainerStyle={styles.searchInput}
          containerStyle={styles.inputContainer}
          maxLength={20}
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)} 
        >
  
      </SearchBar>
      
        
      <FlatList 
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
        renderItem={({ item }) => (

          <View  
              key={item.portfolioProductId} 
              style={styles.productsContainer}
            >
              <Text>{item.financialInstitutionName}</Text>
              <View style={styles.productNameContainer}>             
                <View style={{ backgroundColor: 
                  colorScheme(item.productTypeId), 
                  width: 8, 
                  borderRadius: 20, 
                  marginRight: 10}}
                />
                <Text style={styles.productName}>{item.productName}</Text>
              </View>
              <View style={styles.dataTitleContainer}>
                <Text>SALDO ATUAL</Text>
                <Text>RENTABILIDADE</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={{ 
                  fontSize: 20, 
                  fontWeight: 'bold', 
                  color: colorScheme(item.productTypeId) }}>R${item.equity}
                </Text>
                <Text style={{ 
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: colorScheme(item.productTypeId) }}>{item.profitability}%
                </Text>
              </View>
            </View>
        )}
      />       
    </>
  )
}

const styles = StyleSheet.create({

  flatList: {
    height:Dimensions.get('window').height,
    
  },

  inputContainer: {
    paddingTop: 24,
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#F5F8FA',
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },

  searchInput: {
 
    backgroundColor: '#fff',
  
    borderRadius: 30,
    height: 56,
    marginHorizontal: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
    
  },


  productsContainer: {
    backgroundColor: '#FFF',
    marginTop: 0,
    borderBottomColor: '#CCCFD1',
    borderBottomWidth: 2,
    padding: 10,
  },

  productNameContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingRight: 20,
    height: 60,
  },

  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  colorIndicator: {
    width: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  dataTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  numbers: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5D41AC',
  },

  footer: {
    position: 'relative',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#CCCFD1'
  },

  footerIcons: {
    alignItems: 'center',
    
  },

  footerText: {
    fontSize: 12,
  },

  
 
})