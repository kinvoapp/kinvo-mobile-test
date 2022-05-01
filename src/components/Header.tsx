import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import userImg from '../assets/images/user.png';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Wesley</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: getStatusBarHeight(),
    paddingHorizontal: 35,
  },
  image: {
    borderRadius: 40,
    width: 70,
    height: 70,
  },
  greeting: {
    fontSize: 25,
    color: colors.darkGrey,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 25,
    color: colors.purple,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
});
