import Lista from './Lista';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

function WorkingScreen(){
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}> 
            <Text>Dont look yet!</Text>
        </View>
    )
}

function MainListScreen()
{
    return(
        <SafeAreaView>
            <Lista fetchURL={'https://e9a02505-3276-4fee-aede-c7023dfb9034.mock.pstmn.io/getProducts'}/>
        </SafeAreaView>
    )
}

function Teste(){
    return(
        <Tab.Navigator
            initialRouteName={"Produtos"}
        >
        <Tab.Screen name="Carteira" component={WorkingScreen} />
        <Tab.Screen name="Produtos" component={MainListScreen} />            
        <Tab.Screen name="Extrato" component={WorkingScreen} />
      </Tab.Navigator>
    );
}

export default function MainScreen(){
    return(
    <View>
        <Teste />
    </View>);

}