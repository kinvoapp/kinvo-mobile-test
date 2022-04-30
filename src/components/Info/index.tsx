import React from 'react';
import { ViewStyle } from 'react-native';
import { Body1, Body2 } from '~/styles/typography';
import { InfoContainer } from './styles';

interface InfoProps {
  label: string;
  value: string;
  style?: ViewStyle;
}

const Info = ({ label, value, style }: InfoProps) => {
  return (
    <InfoContainer style={style}>
      <Body2>{label}</Body2>

      <Body1>{value}</Body1>
    </InfoContainer>
  );
};

export default Info;
