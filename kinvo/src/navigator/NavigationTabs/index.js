/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavigationActions } from 'react-navigation';

/* Presentational */
import { View, TouchableOpacity,Text,Image } from 'react-native';
import TabItem from './components/TabItem';

import styles from './styles';

class NavigationTabs extends Component {
  // static propTypes = {
  //   navigation: PropTypes.object.isRequired,
  //   navigationState: PropTypes.shape({
  //     index: PropTypes.number,
  //   }).isRequired,
  //   jumpTo: PropTypes.func.isRequired,
  // };

  onPressBack = () => {
    const { navigation } = this.props;
    const backAction = NavigationActions.back({
      key: null,
    });
    navigation.dispatch(backAction);
  }

  render() {
    const { navigation } = this.props;

    const navigationState = navigation.state
    const jumpTo = navigation.navigate
    
    
    return (
      <View style={styles.container}> 
        <TabItem
        iconName="Summary"
        iconSize={23.97}
          title="Summary"
          active={(navigationState.index === 0)}
          onPress={() => jumpTo('Summary')}
        />
        <TabItem
        iconName="Wallet"
        iconSize={23.97}
          title="Wallet"
          active={(navigationState.index === 1)}
          onPress={() => jumpTo('Wallet')}
        />
          <TabItem
          iconName="Plus"
          iconSize={23.97}
          title="Plus"
          active={(navigationState.index === 9)}
          onPress={() => jumpTo('Register')}
        />     
        <TabItem
        iconName="Premium"
        iconSize={23.97}
          title="Premium"
          active={(navigationState.index === 2)}
          onPress={() => jumpTo('Premium')}
        />
        <TabItem
        iconName="Account"
        iconSize={23.97}
          title="Account"
          active={(navigationState.index === 3)}
          onPress={() => jumpTo('Account')}
        />
      </View>
    );
  }
}


export default NavigationTabs;
