import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitleText}>Carteira</Text>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitleText}>Produtos</Text>
        </View>
        <Text style={styles.headerTitleText}>Extrato</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },

  headerTextContainer: {
    backgroundColor: '#F5F8FA',
    height: '100%',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  headerTitleText: {
    color: '#707B81',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});
