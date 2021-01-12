import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppRoute from './routes';


export default function App() {

    const [loaded] = Font.useFonts({
        MontserratBlack: require('../assets/Montserrat-Black.ttf'),
        Montserrat: require('../assets/Montserrat-Regular.ttf'),
        MontserratMedium: require('../assets/Montserrat-Medium.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <AppRoute />
    );
}

