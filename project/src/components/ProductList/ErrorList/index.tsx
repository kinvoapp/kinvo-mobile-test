import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>Error response data...</Text>
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

export default ErrorList;
