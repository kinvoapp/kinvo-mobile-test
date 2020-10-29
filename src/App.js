import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Image, Text } from 'react-native';
import MainScreen from './MainScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function CarteiraScreen(){
  return(
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Carteira</Text>
    </View>
  );
}

function PlusScreen(){
  return(
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Plus</Text>
    </View>
  );
}

function PremiumScreen(){
  return(
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Premium</Text>
    </View>
  );
}

function ContaScreen(){
  return(
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Conta</Text>
    </View>
  );
}

export default function App(){
    return(
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            let IconPng;
            if (route.name === 'main'){
              IconPng = <Image source={require('../assets/icons/resumo.png')} 
                          style={{width:60, height:60}}
                        />
            }
            if (route.name === 'carteira'){
              IconPng = <Image source={require('../assets/icons/carteira.png')} 
                          style={{width:60, height:60}}
                        />
            }
            if (route.name === 'plus'){
              IconPng = <Image source={require('../assets/icons/plus.png')} 
                          style={{width:65, height:65}}
                        />
            }
            if (route.name === 'premium'){
              IconPng = <Image source={require('../assets/icons/premium.png')} 
                          style={{width:60, height:60}}
                        />
            }
            if (route.name === 'conta'){
              IconPng = <Image source={require('../assets/icons/conta.png')} 
                          style={{width:60, height:60}}
                        />
            }           
            return IconPng;
          },
        })
      }
      tabBarOptions={{
        showLabel: false
      }}
        >
          <Tab.Screen
            name="main"
           component={MainScreen}/>
          <Tab.Screen
            name="carteira"
            component={CarteiraScreen}/>
          <Tab.Screen
            name="plus"
            component={PlusScreen}/>
          <Tab.Screen
            name="premium"
            component={PremiumScreen}
            />
          <Tab.Screen
            name="conta"
            component={ContaScreen}
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
}