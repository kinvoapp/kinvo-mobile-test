import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Card = ({ path, children }: { path?: string; children: ReactNode }) => {
  const { container } = styles;
  return (
    <TouchableOpacity onPress={() => (path ? Actions[path]() : null)} disabled={!path}>
      <View style={container}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 120,
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
