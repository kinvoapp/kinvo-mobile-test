import { Text } from 'react-native';
import NumberFormat from 'react-number-format';

interface MaskProps {
  value: number;
}
export function CurrencyMask({ value }: MaskProps) {
  return (
    <NumberFormat
      value={value}
      displayType="text"
      decimalScale={2}
      decimalSeparator=","
      thousandSeparator='.'
      fixedDecimalScale
      prefix="R$"
      renderText={(value) => <Text>{value}</Text>
      }
    />
  );
}
