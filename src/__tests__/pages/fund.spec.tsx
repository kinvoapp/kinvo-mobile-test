import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react-native';
import AxiosMock from 'axios-mock-adapter';
import api from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import Fund from '../../pages/Fund';
import { ActivityIndicator } from 'react-native';

it('renders the loading component when the Fund is first rendered', () => {
    const rendered = renderer.create(<Fund />);
    const ListRendered = rendered.root.findByType(FlatList);
    const ActivityIndicatorRendered = ListRendered.findByType(ActivityIndicator);
    expect(ActivityIndicatorRendered).toBeTruthy();
});

const apiMock = new AxiosMock(api);

describe('Fund', () => {
  it('should be able to list the funds', async () => {
    const items = [
      {
        id:1,
        name:"Alaska Black Institucional Fundo de Investimento de Ações",
        type:"FIA",
        minimumValue:500,
        rating:0,
        profitability:-52.05,
        status:0          
      },
      {
        id:2,
        name:"BNP Paribas Inflação FI RF",
        type:"RF",
        minimumValue:300,
        rating:2,
        profitability:20.24,
        status:1   
      },
    ];

    apiMock.onGet('/funds').reply(200, items);
    const { getByText } = render(<Fund />);
    await waitFor(() => expect(getByText('Alaska Black Institucional Fundo de Investimento de Ações')).toBeTruthy(), {
        timeout: 200,
    });    
  });
});