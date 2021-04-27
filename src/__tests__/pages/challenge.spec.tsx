import React from 'react';
import renderer from 'react-test-renderer';
import Challenge from '../../pages/Challenge';
import { FlatList } from 'react-native-gesture-handler';

const menuArray = [
    {id: '1', info: 'Ações', subinfo: 'Nacionais', new: false, link: 'Stock', src:require('../../assets/stock.png')},
    {id: '2', info: 'Fundos', subinfo: 'De investimentos', new: true, link: 'Fund', src:require('../../assets/shape.png')},
    {id: '3', info: 'Previdências', subinfo: 'Privadas', new: false, link: 'Pension', src:require('../../assets/pension.png')},
];

describe('Challenge Page', () => {
    it('should contains Stock, Fund and Pension', () => {

        jest.mock("react-native-iphone-x-helper", () => ({
            getStatusBarHeight: jest.fn()
        }))
        
        const rendered = renderer.create(<Challenge />);
        const ChallengeFlatlist = rendered.root.findByType(FlatList);
        expect(ChallengeFlatlist).toBeTruthy();
    })
});
