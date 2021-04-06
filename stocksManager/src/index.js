import React, {useState} from 'react';
import {createRootNavigator} from './routes';
import {createAppContainer} from 'react-navigation';
import {StatusBar, View, Text, ActivityIndicator} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';
import NavigationService from './services/navigationService';
import SharedStyles from './styles/shared';

const App = (props) => {
    const [loading, setLoading] = useState(false);


    const Layout = createAppContainer(createRootNavigator());
    if(loading){
        return (<View style={SharedStyles.defautLoadingStyle}>
                    <StatusBar
              color="#fff"
              barStyle="light-content"
            />
            <ActivityIndicator size="small" color="#fafafa" />
          </View>)
    } else {
        return (
            <Provider store={store}>
              <Layout ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}>
                  <StatusBar
                    color="#fff"
                    barStyle="light-content"
                  />
              </Layout>
            </Provider>
          )
    }
}  

export default App;


