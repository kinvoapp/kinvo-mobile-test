import 'react-native-gesture-handler';

import React from 'react';

import { 
  StyleSheet, 
  StatusBar,
  SafeAreaView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { BreadProvider } from "material-bread";

import { Provider } from 'react-redux'
import store from './store'

import RootNavigator from './navigators/Root'

import AppStatusBar from './components/AppStatusBar'

import isIPhoneX from './util/isIPhoneX'

import colors from './util/colors'

const App = () => {
  if(isIPhoneX()) {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.top} />
        <SafeAreaView style={styles.bottom}>
          <NavigationContainer>
            <BreadProvider>
                <RootNavigator />
            </BreadProvider>
          </NavigationContainer>
        </SafeAreaView> 
      </Provider>
    )
  }
  
  return (
    <Provider store={store}>
      <AppStatusBar
        backgroundColor={colors.primary}
        barStyle="light-content"
      />
      <NavigationContainer>
        <BreadProvider>
            <RootNavigator />
        </BreadProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 0,
    backgroundColor: colors.primary,
  },
  bottom: {
    flex: 1,
    backgroundColor: colors.primary,
  }
});

export default App