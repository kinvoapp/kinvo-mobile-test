import React from 'react';
import { EmptyDataContainer, Tip, Title } from './styles';

interface EmptyDataProps {
  title: string;
  tip: string;
}

const EmptyData = ({ title, tip }: EmptyDataProps) => {
  return (
    <EmptyDataContainer>
      <Title>{title}</Title>

      <Tip>{tip}</Tip>
    </EmptyDataContainer>
  );
};

export default EmptyData;
