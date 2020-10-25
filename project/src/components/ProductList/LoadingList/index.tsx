import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingList: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0fd0e2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default LoadingList;
