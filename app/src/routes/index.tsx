
import React from "react";
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/Home';
import FundosScreen from "../pages/Fundos";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function App() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        height: 120,
                        backgroundColor: '#FFFF'
                    },
                    headerTintColor: "#6F4DBF",
                    headerTitleStyle: {
                        fontSize: 25,
                        fontFamily: 'MontserratMedium',
                        fontWeight: 'bold'
                    }
                }}
            >
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={() => ({ headerTitle: "Desafio" })}
                />
                <Stack.Screen
                    name="Fundos"
                    component={FundosScreen}
                    options={({ navigation }) => ({
                        headerLeft: () => (<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <AntDesign name="left" color="white" size={10} />
                        </TouchableOpacity>)
                    })}
                />

            </Stack.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: '#6F4DBF',
        width: 30,
        height: 30,
        borderRadius: 50,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBackButton: {
        color: '#FFF',
        fontSize: 15
    }
});