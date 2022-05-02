import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Challenge from "../screens/Challenge";
import Stocks from "../screens/Stocks";
import Funds from "../screens/Funds";
import Pensions from "../screens/Pensions";
import BackIcon from "../../assets/icons/back.svg";
import React from 'react';
import { StackParametersList } from "./StackParameters";
import { useNavigation } from "@react-navigation/native";
import colors from "../themes/colors";

export default function Routes() {
    const Stack = createNativeStackNavigator();
    type navigationType = NativeStackNavigationProp<StackParametersList>;
    const navigation = useNavigation<navigationType>();

    return (
        <Stack.Navigator
            initialRouteName="Challenge"
            screenOptions={{ headerShown: true }

            }>
            <Stack.Screen
                name="Challenge"
                component={Challenge}
                options={{
                    headerTintColor: colors.colors.purple,
                    headerTitleStyle: { fontWeight: 'bold' },
                    title: "Desafio",

                }}

            />
            <Stack.Screen
                name="Stocks"
                component={Stocks}
                options={{
                    headerLeft: () => <BackIcon onPress={() => { navigation.navigate("Challenge") }} width={25} height={25} />,
                    headerTintColor: colors.colors.purple,
                    headerTitleStyle: { fontWeight: 'bold' },
                    title: "Ações",

                }}

            />
            <Stack.Screen
                name="Funds"
                component={Funds}
                options={{
                    headerLeft: () => <BackIcon onPress={() => { navigation.navigate("Challenge") }} width={25} height={25} />,
                    headerTintColor: colors.colors.purple,
                    headerTitleStyle: { fontWeight: 'bold' },
                    title: "Fundos"
                }}
            />
            <Stack.Screen
                name="Pensions"
                component={Pensions}
                options={{
                    headerLeft: () => <BackIcon onPress={() => { navigation.navigate("Challenge") }} width={25} height={25} />,
                    headerTintColor: colors.colors.purple,
                    headerTitleStyle: { fontWeight: 'bold' },
                    title: "Previdências"
                }}
            />
        </Stack.Navigator>
    );
}
