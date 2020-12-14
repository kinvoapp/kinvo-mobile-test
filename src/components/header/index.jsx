import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

/*
* using prop drilling this header serves to all the application.
*/

export default function Header({ propText, backButton, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.alignItems}>
        {
          backButton
            &&
            <TouchableHighlight onPress={() => { navigation.navigate('Desafio')}}>
              <Image style={styles.backButton} source={require('../../assets/Icons/backBtn.png')} />
            </TouchableHighlight>
        }
        <Text style={styles.text}>{propText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomColor: '#DAE0E3',
    borderBottomWidth: 1,
  },
  text: {
    color: '#6F4DBF',
    margin: '2%',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  backButton: {
    height: 25,
    width: 25,
  },
  alignItems: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    left: 19
  }
});
