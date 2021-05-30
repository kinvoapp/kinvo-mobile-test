import React, { FC } from "react";
import { Text } from "react-native";
import { RowAlignCenterView } from "../styles";
import ProfitText from "./ProfitText"; 
import ProfitIcon from "./ProfitIcon"; 
import { ProfitProps } from "./types";

const Profit: FC<ProfitProps> = ({ profitability, grey }) => {
    return (
        <RowAlignCenterView>
            <ProfitIcon profitability={profitability} grey={grey} />
            <Text> </Text>
            <ProfitText profitability={profitability} grey={grey} />
        </RowAlignCenterView>
    );
};

export default Profit;
