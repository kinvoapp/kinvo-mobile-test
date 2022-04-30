import React from 'react';
import { ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Body2 } from '~/styles/typography';
import Icon from '../Icon';
import { InfoContainer, ValueContainer, ValueText } from './styles';

interface InfoProps {
  label: string;
  value: string;
  profitabilityType?: 'positive' | 'negative' | 'default';
  style?: ViewStyle;
}

const Info = ({ label, value, profitabilityType, style }: InfoProps) => {
  const { colors } = useTheme();

  return (
    <InfoContainer style={style}>
      <Body2>{label}</Body2>

      <ValueContainer>
        {profitabilityType && profitabilityType !== 'default' && (
          <Icon
            name={profitabilityType === 'positive' ? 'arrowUp' : 'arrowDown'}
            color={
              profitabilityType === 'positive' ? colors.success : colors.error
            }
            size={8}
            style={{ marginRight: 4 }}
          />
        )}

        <ValueText profitabilityType={profitabilityType}>{value}</ValueText>
      </ValueContainer>
    </InfoContainer>
  );
};

export default Info;
