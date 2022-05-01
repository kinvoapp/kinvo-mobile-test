import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface FilterButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function FilterButton({
  title,
  active = false,
  ...res
}: FilterButtonProps) {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...res}>
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 93,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginRight: 20,
    marginVertical: 15,
  },
  text: {
    fontSize: 12,
    color: colors.darkGrey,
    fontFamily: fonts.title,
  },
  containerActive: {
    backgroundColor: colors.purple,
  },
  textActive: {
    color: colors.white,
  },
});
