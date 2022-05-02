import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react"
import { ScrollView } from "react-native"
import { StackParametersList } from "../../routes/StackParameters";
import { Button } from "./styles"
import BoxContainer from "../../components/BoxContainer";
import ScreenContainer from "../../containers/ScreenContainer";
import MenuBox from "../../components/MenuBox";
import colors from "../../themes/colors";
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

                    <Button onPress={() => navigation.navigate("Stocks")}>
                        <MenuBox
                            title="Ações"
                            subtitle="Nacionais"
                            icon={<StocksIcon fill={colors.colors.red} width="25" height="25" />}
                        />
                    </Button>


                </BoxContainer>
                <BoxContainer>


                    <Button onPress={() => navigation.navigate("Funds")}>
                        <MenuBox
                            title="Fundos"
                            subtitle="De investimentos"
                            icon={<FundsIcon fill={colors.colors.red} width="25" height="25" />}
                            status={1}
                        />
                    </Button>


                </BoxContainer>
                <BoxContainer>


                    <Button onPress={() => navigation.navigate("Pensions")}>
                        <MenuBox
                            title="Previdências"
                            subtitle="Privadas"
                            icon={<PensionsIcon fill={colors.colors.red} width="25" height="25" />}
                        />
                    </Button>

                </BoxContainer>

            </ScrollView>
        </ScreenContainer>

    )
}