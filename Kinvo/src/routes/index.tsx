import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Challenge from "../screens/Challenge";
import Stocks from "../screens/Stocks";
import Funds from "../screens/Funds";
import Pensions from "../screens/Pensions";
import BackIcon from "../../assets/icons/back.svg";
import React from 'react';
import { StackParametersList } from "./types";
import { useNavigation } from "@react-navigation/native";
import colors from "../themes/light";
import { HeaderButton, HeaderLeft } from "./styles";
import fonts from "../themes/fonts";


export default function Routes() {
    const Stack = createNativeStackNavigator();
    type navigationType = NativeStackNavigationProp<StackParametersList>;
    const navigation = useNavigation<navigationType>();

    return (
        <Stack.Navigator
            initialRouteName="Challenge"
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name="Challenge"
                component={Challenge}
                options={{
                    headerTitleStyle: { fontFamily: fonts.montserratBold, fontSize: 20, color: colors.colors.purple },
                    title: "Desafio",
                }}
            />
            <Stack.Screen
                name="Stocks"
                component={Stocks}
                options={{
                    headerLeft: () => (
                        <HeaderLeft>
                            <BackIcon onPress={() => { navigation.navigate("Challenge") }} width={25} height={25} />
                            <HeaderButton>Ações</HeaderButton>
                        </HeaderLeft>
                    ),
                    headerTitle: ""
                }}
            />
            <Stack.Screen
                name="Funds"
                component={Funds}
                options={{
                    headerLeft: () => (
                        <HeaderLeft>
                            <BackIcon onPress={() => { navigation.navigate("Challenge") }} width={25} height={25} />
                            <HeaderButton>Fundos</HeaderButton>
                        </HeaderLeft>
                    ),
                    headerTitle: ""
                }}
            />
            <Stack.Screen
                name="Pensions"
                component={Pensions}
                options={{
                    headerLeft: () => (
                        <HeaderLeft>
                            <BackIcon onPress={() => { navigation.navigate("Challenge") }} width={25} height={25} />
                            <HeaderButton>Previdências</HeaderButton>
                        </HeaderLeft>
                    ),
                    headerTitle: ""
                }}
            />
        </Stack.Navigator>
    );
}