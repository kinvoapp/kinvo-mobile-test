import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import colors from '../assets/colors';

interface ISeparator {
  bgColor?: string;
  marginVertical?: number;
}

const Separator: React.FC<ISeparator> = ({ bgColor, marginVertical }) => {
  return (
    <View
      style={[
        styles.border,
        bgColor && { backgroundColor: bgColor },
        marginVertical && { marginVertical },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  border: {
    height: 1,
    backgroundColor: colors.grey,
    marginVertical: 15,
  },
});

export default Separator;
