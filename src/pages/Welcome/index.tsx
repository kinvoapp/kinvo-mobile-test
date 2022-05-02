import React from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import welcome from '../../assets/images/KinvoWelcome.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Welcome() {
  const navigation = useNavigation<any>();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Um novo passo {'\n'} na evolução {'\n'} da sua carteira!
        </Text>

        <Image source={welcome} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Plataforma criada com missão de transformar a relação entre pessoas e
          investimentos.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={navigateToHome}>
          <Icon name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.text,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 32,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.text,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get('window').width * 0.65,
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 50,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});
