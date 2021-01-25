import React from 'react';

import { View, MinimumValueText, MinimumValuePrice } from './styles';

interface IMinimumValueProps {
  price: number;
  disabled?: boolean;
}


const MinimumValue: React.FC<IMinimumValueProps> = ({ price, disabled = false }) => {
  return (
    <View disabled={disabled}>
      <MinimumValueText>Valor mínimo: </MinimumValueText>
      <MinimumValuePrice>
        R$ {price}
      </MinimumValuePrice>
    </View>
  );
}

export default MinimumValue;
