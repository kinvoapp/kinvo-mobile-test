import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Summary: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
  },
});

export default Summary;
