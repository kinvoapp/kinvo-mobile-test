import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { DEFAULT_PURPLE } from '../../assets/constants/colors';

export const Spinner = () => {
  const { loadingContainer } = styles;
  return (
    <View style={loadingContainer}>
      <ActivityIndicator size={48} color={DEFAULT_PURPLE} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
