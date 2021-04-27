import React from 'react';
import renderer from 'react-test-renderer';
import Stock from '../../pages/Stock';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';

it('renders the loading component when the Stock is first rendered', () => {
    const rendered = renderer.create(<Stock />);
    const ListRendered = rendered.root.findByType(FlatList);
    const ActivityIndicatorRendered = ListRendered.findByType(ActivityIndicator);
    expect(ActivityIndicatorRendered).toBeTruthy();
});
