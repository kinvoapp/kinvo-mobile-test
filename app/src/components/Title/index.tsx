import React from 'react';

import { Text } from './styles';

interface ITitleProps {
  title: string;
  fontSize?: number;
  disabled?: boolean;
  flexWrap?: string;
}

const Title: React.FC<ITitleProps> = ({ title, fontSize = 16, disabled = false, flexWrap='nowrap' }) => {
  return (
    <Text
      fontSize={fontSize}
      disabled={disabled}
      flexWrap={flexWrap}
    >
      {title}
    </Text>
  );
}

export default Title;
