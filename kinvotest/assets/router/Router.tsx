import React from 'react';
import { HomeScene } from '../../components/home/HomeScene';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import { DEFAULT_PURPLE, DEFAULT_WHITE, NAV_BORDER_COLOR } from '../constants/colors';
import { ROUTER_ACOES, ROUTER_FUNDOS, ROUTER_HOME, ROUTER_PREVIDENCIAS } from '../constants/router';
import { PrevidenciasScene } from '../../components/previdencias/PrevidenciasScene';
import { BackButton } from '../../components/common/BackButton';
import { AcoesScene } from '../../components/acoes/AcoesScene';
import { FundosScene } from '../../components/fundos/FundosScene';

const AppRouter = () => {
  const { navbarStyle, navbarTitleStyle } = styles;

  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene
          key="main"
          hideNavBar={true}
          navigationBarStyle={navbarStyle}
          headerLayoutPreset="left"
          titleStyle={navbarTitleStyle}
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
            titleStyle={{ ...navbarTitleStyle, marginLeft: -15 }}
            initial={false}
            renderBackButton={() => <BackButton />}
            hideNavBar={false}
            back={true}
          />
          <Scene
            key={ROUTER_ACOES}
            component={AcoesScene}
            title="Ações"
            titleStyle={{ ...navbarTitleStyle, marginLeft: -15 }}
            initial={false}
            renderBackButton={() => <BackButton />}
            hideNavBar={false}
            back={true}
          />
          <Scene
            key={ROUTER_FUNDOS}
            component={FundosScene}
            title="Fundos"
            titleStyle={{ ...navbarTitleStyle, marginLeft: -15 }}
            initial={false}
            renderBackButton={() => <BackButton />}
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
    borderWidth: 0,
    borderColor: NAV_BORDER_COLOR,
    elevation: 0,
    backgroundColor: DEFAULT_WHITE,
    height: 100,
  },
});

export default AppRouter;
