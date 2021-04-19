import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { DEFAULT_WHITE, NAV_BORDER_COLOR } from '../../assets/constants/colors';

export const Card = ({ path, children, height }: { path?: string; children: ReactNode; height?: number }) => {
  const { container } = styles;
  let customContainerStyle = { ...container, height };

  return (
    <TouchableOpacity onPress={() => (path ? Actions[path]() : null)} disabled={!path}>
      <View style={customContainerStyle}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: DEFAULT_WHITE,
    marginBottom: 20,
    flexDirection: 'row',
    borderColor: NAV_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
  },
});
