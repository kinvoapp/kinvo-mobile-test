import React, { FC } from "react";
import ArrowGain from "../assets/icons/arrow-gain.svg";
import ArrowLoss from "../assets/icons/arrow-loss.svg";
import ArrowGainGrey from "../assets/icons/arrow-gain-grey.svg";
import ArrowLossGrey from "../assets/icons/arrow-loss-grey.svg";
import { ProfitProps } from "./types";

const ProfitIcon: FC<ProfitProps> = ({ profitability, grey }) => {
    if(grey){
        return profitability >= 0 ? <ArrowGainGrey /> : <ArrowLossGrey/>;
    } else{
        return profitability >= 0 ? <ArrowGain /> : <ArrowLoss />;
    }
};

export default ProfitIcon;
