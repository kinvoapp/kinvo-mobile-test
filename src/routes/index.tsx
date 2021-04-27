import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Challenge from '../pages/Challenge';
import Stock from '../pages/Stock';
import Fund from '../pages/Fund';
import Pension from '../pages/Pension';


const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {backgroundColor: '#ECF0F2'},
            }}>
            <Screen name="Challenge" component={Challenge} />
            <Screen name="Stock" component={Stock} /> 
            <Screen name="Fund" component={Fund} />
            <Screen name="Pension" component={Pension} />
            
        </Navigator>
    );
}

export default AppStack;