import React, { FC } from "react";
import ArrowGain from "../assets/icons/arrow-gain.svg";
import ArrowLoss from "../assets/icons/arrow-loss.svg";
import { ProfitProps } from "./types";

const ProfitIcon: FC<ProfitProps> = ({ profitability }) => {
    return profitability >= 0 ? <ArrowGain /> : <ArrowLoss />;
};

export default ProfitIcon;
