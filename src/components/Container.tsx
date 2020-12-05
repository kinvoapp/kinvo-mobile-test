import React, { ReactNode } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextStyle, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import icons from '../assets/icons';

interface IContainer {
  children: ReactNode;
  screenName: string;
  hasBackBtn?: boolean;
  onPress?: () => void;
}

const Container = ({
  children,
  screenName = 'Desafio',
  hasBackBtn = false,
  onPress,
}: IContainer) => {
  return (
    <>
      <View style={styles.statusBar} />
      <SafeAreaView style={styles.container}>
        {/* Back Header Button */}
        <View style={styles.header}>
          {hasBackBtn && (
            <TouchableOpacity style={styles.backBtn} onPress={onPress}>
              <Image source={icons.arrow_left} />
            </TouchableOpacity>
          )}

          {/* Label */}
          <Text style={[styles.label, hasBackBtn && { marginLeft: 13 }]}>{screenName}</Text>
        </View>
        {children}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: '#FFF',
    height: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'white',
  },
  backBtn: {
    backgroundColor: '#6F4DBF',
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#6F4DBF',
    fontSize: 20,
    marginLeft: 20,
  } as TextStyle,
});

export default Container;
