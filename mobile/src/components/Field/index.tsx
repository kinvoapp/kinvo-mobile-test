import React from 'react';
import { ViewProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import formatValue from '../../utils/formatValue';

import {
  Container,
  LabelText,
  ValueText,
  ValueContainer,
  RatingContainer,
} from './styles';

export interface FieldProps extends ViewProps {
  label: string;
  labelColor?: string;
  children: string | number;
  color?: string;
  opacity?: number;
  type: 'text' | 'value' | 'percent' | 'rating';
}

const styles = {
  default: {
    labelColor: '#627179',
    color: '#627179',
  },
  value: {
    negativeColor: '#e85d1f',
  },
  rating: {
    color: '#f8c22e',
  },
};

const Field: React.FC<FieldProps> = ({
  label,
  labelColor,
  children,
  color,
  opacity,
  type,
  ...rest
}) => {
  let formatted = children;
  const stars = [];

  switch (type) {
    case 'value':
      formatted = `R$ ${formatValue(Number(children))}`;
      break;
    case 'percent':
      formatted = `${formatValue(Number(children))}%`;
      break;
    case 'rating':
      for (let i = 0; i < 5; i++) {
        stars.push(
          <Icon
            key={i}
            name={i < children ? 'star' : 'star-outline'}
            size={20}
            color={color || styles.value.negativeColor}
          />,
        );
      }
  }

  return (
    <Container {...rest}>
      <LabelText
        color={labelColor || styles.default.labelColor}
        opacity={opacity || 1}
      >
        {`${label}:`}
      </LabelText>
      <ValueContainer>
        {children < 0 && (
          <Icon
            name="arrow-down"
            size={14}
            color={color || styles.value.negativeColor}
          />
        )}
        {type === 'rating' ? (
          <RatingContainer>{stars.map(star => star)}</RatingContainer>
        ) : (
          <ValueText
            color={
              color ||
              (children < 0 ? styles.value.negativeColor : styles.default.color)
            }
            opacity={opacity || 1}
          >
            {formatted}
          </ValueText>
        )}
      </ValueContainer>
    </Container>
  );
};

export default Field;
