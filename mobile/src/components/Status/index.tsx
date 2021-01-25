import React from 'react';
import { ViewProps } from 'react-native';
import { StyleSheetManager } from 'styled-components';

import formatValue from '../../utils/formatValue';

import { Container, Text } from './styles';

export interface StatusProps extends ViewProps {
  children?: undefined;
  type: 'new' | 'closed';
}

const styles = {
  new: {
    label: 'Novo',
    backgroundColor: '#40c5d6',
    textColor: '#ffffff',
  },
  closed: {
    label: 'Fechado',
    backgroundColor: '#818181',
    textColor: '#f7f8f8',
  },
};

const MenuItem: React.FC<StatusProps> = ({ type, ...rest }) => (
  <Container color={styles[type].backgroundColor} {...rest}>
    <Text color={styles[type].textColor}>{styles[type].label}</Text>
  </Container>
);

export default MenuItem;
