import React, { FC } from "react";
import { GainText, GreyText, LossText } from "../styles";
import { ProfitProps } from "./types";

//TODO format money
const ProfitText: FC<ProfitProps> = ({ profitability, grey }) => {
    if(grey){
        return <GreyText>{profitability}%</GreyText>
    } else{
        return profitability >= 0 ? (
            <GainText>{profitability}%</GainText>
        ) : (
            <LossText>{profitability}%</LossText>
        );
    }
};

export default ProfitText;
