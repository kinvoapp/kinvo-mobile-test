import React, { Component } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import { MSFontList } from './assets/fonts/montserrat-fontlist';

import AppRouter from './assets/router/Router';

interface AppState {
  isFontLoaded: boolean;
  isReady: boolean;
  isConnected: boolean;
}

export default class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFontLoaded: false,
      isReady: false,
      isConnected: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync(MSFontList);

    this.setState({ isFontLoaded: true });
  }

  render() {
    const { isFontLoaded } = this.state;

    if (isFontLoaded) {
      return <AppRouter />;
    } else {
      return <View />;
    }
  }
}
