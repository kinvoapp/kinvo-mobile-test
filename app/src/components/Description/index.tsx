import React from 'react';

import { Text } from './styles';

interface DescriptionProps {
  description: string;
  disabled?: boolean;
}

const Description: React.FC<DescriptionProps> = ({ description, disabled = false }) => {
  return (
    <Text disabled={disabled}>{description}</Text>
  );
}

export default Description;
