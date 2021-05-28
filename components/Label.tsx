import React,{ FC } from "react";
import { LabelContainer, LabelText } from "./styles";
import { LabelProps } from "./types";

const Label : FC<LabelProps> = ({text, color}) =>{
    return (
        <LabelContainer color={color}><LabelText>{text}</LabelText></LabelContainer>
    )
}

export default Label