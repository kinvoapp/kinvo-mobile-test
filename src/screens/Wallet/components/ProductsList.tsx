import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { State } from '../../../store/';
import { Products } from '../../../store/modules/search/types';
import  { colorScheme } from '../../../styles/ColorScheme';
import NumberFormat from 'react-number-format';


export default function ProductsList() {

  const searchResults = useSelector<State, Products[]>(state => state.search.data)
  
  return (


       <FlatList 
          data={searchResults}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
          renderItem={({ item }) => (

        <View  
          key={item.portfolioProductId} 
          style={styles.productsContainer}
        >
          <Text 
            style={{ color: 
            colorScheme(item.productTypeId), fontFamily: 'SFProDisplayBold'}}>
              {item.financialInstitutionName}
          </Text>
          <View style={styles.productNameContainer}>             
            <View style={{ backgroundColor: 
              colorScheme(item.productTypeId), 
              width: 5,
              height: 30, 
              borderRadius: 20, 
              marginRight: 10}}
            />
            <Text style={styles.productName}>{item.productName}</Text>
          </View>
          <View style={styles.dataTitleContainer}>
            <Text style={{ fontFamily: 'SFProDisplay'}}>SALDO ATUAL</Text>
            <Text style={{ fontFamily: 'SFProDisplay'}}>RENTABILIDADE</Text>
          </View>
          <View style={styles.dataContainer}>
          <NumberFormat 
            value={item.equity} 
            displayType={'text'}
            thousandSeparator='.' 
            decimalSeparator=','
            prefix={'R$'} 
            renderText={value => <Text style={{ 
              fontSize: 20, 
              color: colorScheme(item.productTypeId),
              fontFamily: 'SFProDisplayBold' }}>{value}
              </Text>}
          />
          <NumberFormat 
            value={item.profitability} 
            displayType={'text'}
            decimalSeparator=','
            suffix={'%'} 
            renderText={value => <Text style={{ 
              fontSize: 20,  
              color: colorScheme(item.productTypeId),
              fontFamily: 'SFProDisplayBold' }}>{value}
              </Text>}
          />               
           </View>
        </View>
          )}
        />       
   
  )
}

const styles = StyleSheet.create({

   flatList: {
     height:Dimensions.get('window').height,
    
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
     height: 50,
     alignItems: 'center',
   },

   productName: {
     fontSize: 16,
     textAlign: 'left',
     fontFamily: 'SFProDisplayBold'
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