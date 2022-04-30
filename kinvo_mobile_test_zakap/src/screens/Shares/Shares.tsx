import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import * as S from './Shares.style'

type SharesScreenProp = StackNavigationProp<RootStackParamList, 'Shares'>;

export const Shares = () => {
    const navigation = useNavigation<SharesScreenProp>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Tela de Ações</Text>
            <Button title="Desafio" onPress={() => navigation.navigate('Home')} />
            <Button title="Previdencias" onPress={() => navigation.navigate('SocialSecurity')} />
        </View>
    )
}