import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react"
import { ScrollView } from "react-native"
import { StackParametersList } from "../../routes/types";
import BoxContainer from "../../components/BoxContainer";
import ScreenContainer from "../../containers/ScreenContainer";
import MenuBox from "../../components/MenuBox";
import colors from "../../themes/light";
import StocksIcon from "../../../assets/icons/stocks.svg";
import FundsIcon from "../../../assets/icons/funds.svg";
import PensionsIcon from "../../../assets/icons/pensions.svg";


export default function Challenge() {
    type navigationType = NativeStackNavigationProp<StackParametersList>;
    const navigation = useNavigation<navigationType>();

    return (
        <ScreenContainer>
            <ScrollView>
                <BoxContainer>
                    <MenuBox
                        title="Ações"
                        subtitle="Nacionais"
                        icon={<StocksIcon fill={colors.colors.orange} width="25" height="25" />}
                        onPress={() => navigation.navigate("Stocks")}
                    />
                </BoxContainer>
                <BoxContainer>
                    <MenuBox
                        title="Fundos"
                        subtitle="De investimentos"
                        icon={<FundsIcon fill={colors.colors.orange} width="25" height="25" />}
                        status={1}
                        onPress={() => navigation.navigate("Funds")}
                    />
                </BoxContainer>
                <BoxContainer>
                    <MenuBox
                        title="Previdências"
                        subtitle="Privadas"
                        icon={<PensionsIcon fill={colors.colors.orange} width="25" height="25" />}
                        onPress={() => navigation.navigate("Pensions")}
                    />
                </BoxContainer>
            </ScrollView>
        </ScreenContainer>
    )
}