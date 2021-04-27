import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './routes';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
        <View style={{ flex: 1, backgroundColor: '#ECF0F2'}}>
            <AppStack />
        </View>
    </NavigationContainer>
);

export default App;