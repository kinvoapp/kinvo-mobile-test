import React from "react";
import NumberFormat from "react-number-format";
import Typography from "..";
import Colors from "../../../utils/colors";
import Icon from "../../Icon";
import { Container, IconContainer } from "./styles";

type Props = {
  value: number;
  prefix?: string;
  sufix?: string;
};

function IndicatorTypography({ value, prefix = "", sufix = "" }: Props) {
  const color =
    value > 0
      ? Colors.PROFITABILITY_POSITIVE
      : value < 0
      ? Colors.PROFITABILITY_NEGATIVE
      : Colors.DARK;
  return (
    <Container>
      <IconContainer>
        {value !== 0 && (
          <Icon
            width={8.4}
            height={8.25}
            name={value > 0 ? "arrow-up" : "arrow-down"}
          />
        )}
      </IconContainer>
      <NumberFormat
        value={Number(value.toFixed(0))}
        decimalScale={0}
        fixedDecimalScale={true}
        displayType={"text"}
        thousandSeparator={"."}
        decimalSeparator={","}
        prefix={prefix}
        suffix={sufix}
        renderText={(value) => (
          <Typography align="right" color={color} type="strong">
            {value}
          </Typography>
        )}
      />
    </Container>
  );
}

export default IndicatorTypography;
