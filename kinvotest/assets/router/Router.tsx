import React from 'react';
import { HomeScene } from '../../components/home/HomeScene';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { DEFAULT_PURPLE, DEFAULT_WHITE } from '../constants/colors';
import { ROUTER_HOME, ROUTER_PREVIDENCIAS } from '../constants/router';
import { PrevidenciasScene } from '../../components/previdencias/PrevidenciasScene';

const renderBackButton = () => {
  return (
    <TouchableOpacity onPress={() => Actions.pop()}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../../assets/icons/backButton/back.png')}
          style={{ width: 24, height: 24, marginLeft: 20, marginRight: 10 }}
        />
      </View>
    </TouchableOpacity>
  );
};

const AppRouter = () => {
  const { navbarStyle, navbarTitleStyle } = styles;

  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene
          key="main"
          hideNavBar={true}
          navigationBarStyle={navbarStyle}
          headerLayoutPreset={'left'}
          titleStyle={navbarTitleStyle}
          //   renderBackButton={renderBackButton}
          type="replace"
        >
          <Scene
            key={ROUTER_HOME}
            component={HomeScene}
            title="Desafio"
            initial={true}
            hideNavBar={false}
            back={false}
          />
          <Scene
            key={ROUTER_PREVIDENCIAS}
            component={PrevidenciasScene}
            title="Previdências"
            initial={false}
            hideNavBar={false}
            back={true}
          />
        </Scene>
      </Stack>
    </Router>
  );
};

const styles = StyleSheet.create({
  navbarTitleStyle: {
    fontFamily: 'ms-bold',
    color: DEFAULT_PURPLE,
    fontSize: 20,
  },
  navbarStyle: {
    borderBottomWidth: 0,
    elevation: 0,
    backgroundColor: DEFAULT_WHITE,
    height: 100,
  },
});

export default AppRouter;
