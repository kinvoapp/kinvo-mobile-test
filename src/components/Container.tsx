import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextStyle, Image } from 'react-native';

import colors from '../assets/colors';
import typography from '../assets/fonts';
import icons from '../assets/icons';

interface IContainer {
  children: ReactNode;
  screenName: string;
  hasBackBtn?: boolean;
  onPress?: () => void;
}

const Container = ({
  children,
  screenName = 'Desafio',
  hasBackBtn = false,
  onPress,
}: IContainer) => {
  return (
    <>
      <View style={styles.statusBar} />
      <View style={styles.container}>
        {/* Back Header Button */}
        <View style={styles.header}>
          {hasBackBtn && (
            <TouchableOpacity style={styles.backBtn} onPress={onPress}>
              <Image source={icons.arrow_left} />
            </TouchableOpacity>
          )}

          {/* Label */}
          <Text style={[styles.label, hasBackBtn && { marginLeft: 13 }]}>{screenName}</Text>
        </View>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: colors.white,
    height: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: colors.white,
  },
  backBtn: {
    backgroundColor: colors.primary,
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  label: {
    fontWeight: 'bold',
    color: colors.primary,
    ...typography.largeTitle,
    marginLeft: 20,
  } as TextStyle,
});

export default Container;
