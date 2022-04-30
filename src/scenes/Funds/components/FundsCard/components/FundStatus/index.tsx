import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Chip } from './styles';

interface FundStatus {
  status: number;
}

const FundStatus = ({ status }: FundStatus) => {
  const { colors } = useTheme();

  return (
    <View>
      <Chip
        title={status === 1 ? 'Novo' : 'Fechado'}
        color={status === 2 ? colors.gray : undefined}
      />
    </View>
  );
};

export default FundStatus;
