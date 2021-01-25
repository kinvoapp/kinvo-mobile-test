import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Title from '../Title';
import Description from '../Description';

import { View, Button, Text } from './styles';

interface IWifiErrorProps {
  text: string;
  navigateTo: string;
}

const WifiError: React.FC<IWifiErrorProps> = ({ text, navigateTo  }) => {
  const navigation = useNavigation();

  const handleRefreshTheScreen = useCallback((navigateTo) => {
    navigation.navigate(navigateTo);
  }, [navigation]);


  return (
    <View>
      <Title title='Ocorreu um erro.' />
      <Description description={`Não foi possível se conectar ao banco de ${text}.`} />
      <Button onPress={() => handleRefreshTheScreen(navigateTo)}>
        <Text>TENTAR NOVAMENTE</Text>
      </Button>
    </View>
  );
}

export default WifiError;
