import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { DEFAULT_WHITE, FECHADO_COLOR_TEXT, NAV_BORDER_COLOR } from '../../assets/constants/colors';

export const Card = ({
  path,
  children,
  height,
  disabled = false,
}: {
  path?: string;
  children: ReactNode;
  height?: number;
  disabled?: Boolean;
}) => {
  const { container } = styles;
  let customContainerStyle = { ...container, height, backgroundColor: disabled ? FECHADO_COLOR_TEXT : DEFAULT_WHITE };

  return (
    <TouchableOpacity onPress={() => (path ? Actions[path]() : null)} disabled={!path}>
      <View style={customContainerStyle}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginBottom: 20,
    flexDirection: 'row',
    borderColor: NAV_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
  },
});
