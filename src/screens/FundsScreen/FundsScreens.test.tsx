import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { Middleware, Dispatch, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import { store } from '../../store/index';

import { theme } from '~config/theme';
import { FundsScreen } from './FundsScreen';
import { fundsAsync } from '../../store/funds/thunks';

const Providers: React.FC = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);

const wrapper = (props: JSX.IntrinsicAttributes) =>
  render(<FundsScreen {...props} />, { wrapper: Providers });

const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = [
  thunk,
];

const mockStore = configureStore(middlewares);

test('renderização padrão', () => {
  const component = wrapper({});
  expect(component).toMatchSnapshot();
});

test('chama dispatch fetchByFunds', async () => {
  const mockInitialState = {
    funds: [],
    loading: false,
  };

  const store = mockStore(mockInitialState);
  store.dispatch(fundsAsync() as any);
  const actions = store.getActions();

  expect(actions).toHaveLength(1);
  expect(actions[0].type).toEqual('getFunds/fetchByFunds/pending');
  expect(actions[0].payload).toBeUndefined();
});
