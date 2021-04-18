import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity, StyleProp } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Card = ({ path, children, height }: { path?: string; children: ReactNode; height: number }) => {
  const { container } = styles;
  let customContainerStyle = { ...container, height: height };

  return (
    <TouchableOpacity onPress={() => (path ? Actions[path]() : null)} disabled={!path}>
      <View style={customContainerStyle}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: '#DAE0E3',
    borderWidth: 1,
  },
});

export { Card };
