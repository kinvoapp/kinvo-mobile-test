import React from 'react';
import {   NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Detail from './pages/Detail';


const Stack = createStackNavigator();


function Routes(){
return(
<NavigationContainer> 
    <Stack.Navigator>
        <Stack.Screen  name="Home" 
        component={Home}
        options={{
            title: 'Fundos',
            headerRight: () => (
            <TouchableOpacity >
             <Feather
             name="dollar-sign"
             size={20}
             color="#000"
             />
            </TouchableOpacity>

            ) 
                }}
        />
        <Stack.Screen name="detail" component={Detail}
        options={{
            title: 'Fundos',
            headerRight: () => (
            <TouchableOpacity >
             <Feather
             name="dollar-sign"
             size={20}
             color="#000"
             />
            </TouchableOpacity>

            ) 
                }}/>
    </Stack.Navigator>
</NavigationContainer>

);
}

export default Routes;