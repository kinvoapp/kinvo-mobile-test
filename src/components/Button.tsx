import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...res}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...res}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.text,
  },
});
