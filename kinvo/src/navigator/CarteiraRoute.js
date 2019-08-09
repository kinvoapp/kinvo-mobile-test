import React from 'react'
import Products from '../components/Products'






import {  createMaterialTopTabNavigator,MaterialTopTabBar } from 'react-navigation';
import TabBar from '../components/TabBar';

const CarteiraRoute =  createMaterialTopTabNavigator({
    Carteira: { 
        screen: () => null,
        
       
        
      },
      Produtos: {
        screen: Products, 
        tabStyle:{ width: 20} 
        
      }, 
      Extrato: {
        screen: () => null,   
        
      },   
  },{    tabBarComponent: TabBar,   
    initialRouteName:'Produtos',
    tabBarOptions:{
      upperCaseLabel:false,
        style:{backgroundColor:'#FFFFFF',elevation:0},
        labelStyle:{fontSize:16}, 
        activeTintColor: '#707B81',
        inactiveTintColor: '#707B81',
        indicatorStyle:{backgroundColor:'#F5F8FA',height: 50,borderTopEndRadius:15,borderTopStartRadius:15,width:111 },  
        tabStyle: {
          justifyContent: "center",  
          width:111  
      },      
    }
  }
  ) 




export default CarteiraRoute;