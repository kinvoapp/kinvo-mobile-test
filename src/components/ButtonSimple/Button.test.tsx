import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from '~config/theme';

import { ButtonSimple } from './ButtonSimple';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

it('Button visualização default conrretamente', () => {
  const { getByLabelText } = render(
    <ButtonSimple typeButton="primary" size="default">
      Button Primary
    </ButtonSimple>,
    {
      wrapper: Providers,
    },
  );

  const button = getByLabelText('button-Teste');

  expect(button).toBeTruthy();
  expect(button.props.style.minHeight).toEqual(56);
  expect(button.props.style.alignItems).toEqual('center');
});
