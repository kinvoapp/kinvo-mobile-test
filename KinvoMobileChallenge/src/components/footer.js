import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import CenterIcon from 'react-native-vector-icons/AntDesign';
import FirstSecondIcon from 'react-native-vector-icons/Feather';
import FourthIcon from 'react-native-vector-icons/FontAwesome';
import FifthIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row', marginRight: 17}}>
          <View style={styles.footerContentContainer}>
            <TouchableOpacity>
              <FirstSecondIcon
                onPress={() => {}}
                name="target"
                size={35}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Resumo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContentContainer}>
            <TouchableOpacity>
              <FirstSecondIcon
                onPress={() => {}}
                name="dollar-sign"
                size={35}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Carteira</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContentContainer}>
            <TouchableOpacity>
              <CenterIcon
                onPress={() => {}}
                name="pluscircle"
                size={50}
                style={styles.centerIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footerContentContainer}>
            <TouchableOpacity>
              <FourthIcon
                onPress={() => {}}
                name="diamond"
                size={35}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Premium</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContentContainer}>
            <TouchableOpacity>
              <FifthIcon
                onPress={() => {}}
                name="account-circle-outline"
                size={35}
                style={styles.icon}
              />
              <Text style={styles.footerText}>Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 67,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerContentContainer: {
    flex: 1,
    marginLeft: 15,
    alignItems: 'center',
  },

  icon: {
    alignSelf: 'center',
    color: '#627179',
  },

  footerText: {
    color: '#627179',
    fontSize: 12,
  },

  centerIcon: {
    color: '#0DD1E3',
    marginBottom: 7,
  },
});
