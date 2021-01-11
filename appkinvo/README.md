
Projeto : appkinvo

um breve exemplo de um layout basico do react
import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
}

export default HelloWorldApp;

é um app desinvolvido para consulta de finanças 


construido com react-native ,expo e axios,@react-navigation/stack,npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view,@react-navigation/native

para executar o app 
1 necessario ter um emulador android ou ios , o usado na construção foi o Android Studio (https://developer.android.com/studio) ou acessar pelo qr code no proprio celular 
2 para editar o projeto tambem é necessario usar um editor de video , o utilizado no projeto foi o Visual Studio Code



a api utilizada foi  https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds

para continuar o projeto faça um fork deste repositorio https://github.com/mollinari1/kinvo-mobile-test.git

