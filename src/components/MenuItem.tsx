import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import BackgroundIcon from '../assets/icons/icon-background.svg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface MenuItensProps extends TouchableOpacityProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export function MenuItem({icon, title, text, ...res}: MenuItensProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...res}>
      <BackgroundIcon style={styles.backgroundIcon} />
      <View style={styles.icon}>{icon}</View>
      <View style={styles.text}>
        <Text style={styles.buttonTitle}>{title}</Text>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginVertical: 10,
    height: 120,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonTitle: {
    fontSize: 16,
    marginHorizontal: 20,
    color: colors.purple,
    fontFamily: fonts.heading,
  },
  buttonText: {
    fontSize: 10,
    marginHorizontal: 20,
    color: colors.darkGrey,
    fontFamily: fonts.title,
  },
  text: {
    marginLeft: 12,
  },
  icon: {
    marginLeft: 30,
    width: 23,
    color: colors.darkGrey,
  },
  backgroundIcon: {
    width: 10,
    position: 'absolute',
    top: 32,
    left: 16,
    right: 0,
    bottom: 0,
  },
});
