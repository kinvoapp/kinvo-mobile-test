import { Text } from 'react-native';

import NumberFormat from 'react-number-format';

interface TaxesProps {
  value: number;
}
export function Taxes({ value }: TaxesProps) {
  return (
    <NumberFormat
      value={value}
      displayType="text"
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      suffix='%'
      renderText={(value) => <Text>{value}</Text>
      }
    />
  );
}
