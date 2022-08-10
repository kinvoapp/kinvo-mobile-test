
import { View } from 'react-native';
import { Up, Down } from './styles';
import { AntDesign } from '@expo/vector-icons';

interface ProfitabilityProps {
  value: number;
}

export function Profitability({ value }: ProfitabilityProps) {
  return (
    <>
      {value >= 0
        ?
        <Up>
          <AntDesign name="arrowup" size={12} />
          {value}
          %
        </Up>
        :
        <Down>
          <AntDesign name="arrowdown" size={12} />
          {value}
          %
        </Down>
      }
    </>
  );
}
