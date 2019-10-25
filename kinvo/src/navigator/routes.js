import WalletTabs from "./WalletTabs";
import NavigationTabs from "./NavigationTabs";
import React from "react";

import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import Working from "../pages/WorkingPage";
import RegisterPage from "../pages/RegisterHooksPage";

const Pages = createBottomTabNavigator(
  {
    Summary: {
      screen: Working,
    
    },
    Wallet: {
      screen: WalletTabs,
   
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
