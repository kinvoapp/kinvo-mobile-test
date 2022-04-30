import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import * as S from './SocialSecurity.style'

type SocialSecurityScreenProp = StackNavigationProp<RootStackParamList, 'SocialSecurity'>;

export const SocialSecurity = () => {
    const navigation = useNavigation<SocialSecurityScreenProp>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Tela de Previdências</Text>
            <Button title="Desafio" onPress={() => navigation.navigate('Home')} />
            <Button title="Acoes" onPress={() => navigation.navigate('Shares')} />
        </View>
    )
}