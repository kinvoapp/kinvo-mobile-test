import CarteiraTabs from "./CarteiraTabs";
import NavigationTabs from "./NavigationTabs";
import React from "react";

import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import Working from "../pages/WorkingPage";
import RegisterPage from "../pages/RegisterPage";

const Pages = createBottomTabNavigator(
  {
    Summary: {
      screen: Working,
    
    },
    Wallet: {
      screen: CarteiraTabs,
   
    },
   
    Premium: {
      screen: Working,
     
    },
    Account: {
      screen: Working,
     
    }
  },
  {
    initialRouteName: "Wallet",  
    tabBarComponent: NavigationTabs,
   
  }
);


const Routes = createStackNavigator(
    { 
    Register: {
        screen: RegisterPage,      
      },
      Main: {
        screen: Pages,     
      },

    },{
      initialRouteName: "Main",  
      headerMode:'none'
    }
)





export default Routes;
