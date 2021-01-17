import React from "react";
import NumberFormat from "react-number-format";
import Typography from "..";

type Props = {
  value: number;
  currency?: "BRL" | "USD";
  typographyProps?: React.ComponentProps<typeof Typography>;
};

const prefix = {
  BRL: "R$ ",
  USD: "$ ",
} as Record<Required<Props>["currency"], string>;

function CurrencyTypography({
  value,
  currency = "BRL",
  typographyProps = {},
}: Props) {
  return (
    <NumberFormat
      value={value}
      decimalScale={2}
      fixedDecimalScale={true}
      displayType={"text"}
      thousandSeparator={"."}
      decimalSeparator={","}
      prefix={"R$ "}
      renderText={(value) => <Typography type="strong">{value}</Typography>}
    />
  );
}

export default CurrencyTypography;
