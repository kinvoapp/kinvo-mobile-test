import React, { FC } from "react";
import { Text } from "react-native";
import { RowAlignCenterView } from "../styles";
import ProfitText from "./ProfitText"; 
import ProfitIcon from "./ProfitIcon"; 
import { ProfitProps } from "./types";

const Profit: FC<ProfitProps> = ({ profitability }) => {
    return (
        <RowAlignCenterView>
            <ProfitIcon profitability={profitability} />
            <Text> </Text>
            <ProfitText profitability={profitability} />
        </RowAlignCenterView>
    );
};

export default Profit;
