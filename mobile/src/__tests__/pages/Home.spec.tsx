import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Home from '../../pages/Home';

const mockedNavigationNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigationNavigate,
  }),
}));

describe('Home page', () => {
  it('should be able to navegate for stocks page', () => {
    const { getByTestId } = render(<Home />);

    const stocksMenuItem = getByTestId('stocksMenuItem');

    fireEvent.press(stocksMenuItem);

    expect(mockedNavigationNavigate).toHaveBeenCalledWith('Stocks');
  });

  it('should be able to navegate for funds page', () => {
    const { getByTestId } = render(<Home />);

    const fundsMenuItem = getByTestId('fundsMenuItem');

    fireEvent.press(fundsMenuItem);

    expect(mockedNavigationNavigate).toHaveBeenCalledWith('Funds');
  });

  it('should be able to navegate for pensions page', () => {
    const { getByTestId } = render(<Home />);

    const pensionsMenuItem = getByTestId('pensionsMenuItem');

    fireEvent.press(pensionsMenuItem);

    expect(mockedNavigationNavigate).toHaveBeenCalledWith('Pensions');
  });
});
