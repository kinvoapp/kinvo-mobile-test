import React from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import colors from '../assets/colors';
import typography from '../assets/fonts';

interface ILabelChipProps {
  label: string;
  bgColor: string;
}

const LabelChip: React.FC<ILabelChipProps> = ({ label, bgColor }) => {
  return (
    <View style={[styles.labelContainer, { backgroundColor: bgColor }]}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 50,
  },
  label: {
    ...typography.caption,
    color: colors.white,
  } as TextStyle,
});

export default LabelChip;
