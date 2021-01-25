import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Header from '../../components/Header';

const mockedNavigationGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: mockedNavigationGoBack,
  }),
}));

describe('Header component', () => {
  it('should be able to go back for home page', () => {
    const { getByTestId } = render(<Header goBack>Test</Header>);

    const goBackButton = getByTestId('goBackButton');

    fireEvent.press(goBackButton);

    expect(mockedNavigationGoBack).toHaveBeenCalled();
  });
});
