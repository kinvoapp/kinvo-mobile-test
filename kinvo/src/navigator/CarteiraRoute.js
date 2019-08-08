import React from 'react'
import { Image } from 'react-native'
import App from '../components/App'







import {  createMaterialTopTabNavigator } from 'react-navigation';

const CarteiraRoute =  createMaterialTopTabNavigator({
    Carteira: {
        screen: () => null,
        
       
        
      },
      Produtos: {
        screen: () => null,   
        
      }, 
      Extrato: {
        screen: () => null,   
        
      },   
  },{
    initialRouteName:'Produtos',
    tabBarOptions:{
        style:{backgroundColor:'#FFFFFF',elevation:0},
        activeTintColor: '#707070',
        inactiveTintColor: '#707070',
        indicatorStyle:{backgroundColor:'#F5F8FA',height: 50 },
    }
  }
  )




export default CarteiraRoute;