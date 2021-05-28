import React, { FC } from "react";
import { GainText, LossText } from "../styles";
import { ProfitProps } from "./types";

//TODO format money
const ProfitText: FC<ProfitProps> = ({ profitability }) => {
    return profitability >= 0 ? (
        <GainText>{profitability}%</GainText>
    ) : (
        <LossText>{profitability}%</LossText>
    );
};

export default ProfitText;
