import React from 'react'
import { Image } from 'react-native'
import Products from '../components/Products'







import {  createMaterialTopTabNavigator } from 'react-navigation';

const CarteiraRoute =  createMaterialTopTabNavigator({
    Carteira: {
        screen: () => null,
        
       
        
      },
      Produtos: {
        screen: Products,   
        
      }, 
      Extrato: {
        screen: () => null,   
        
      },   
  },{
    initialRouteName:'Produtos',
    tabBarOptions:{
      upperCaseLabel:false,
        style:{backgroundColor:'#FFFFFF',elevation:0},
        labelStyle:{fontSize:16},
        activeTintColor: '#707070',
        inactiveTintColor: '#707070',
        indicatorStyle:{backgroundColor:'#F5F8FA',height: 50,borderTopEndRadius:15,borderTopStartRadius:15 },
    }
  }
  )




export default CarteiraRoute;