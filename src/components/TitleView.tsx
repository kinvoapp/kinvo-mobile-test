import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface TitleViewProps {
  title: string;
}

export function TitleView({title, ...res}: TitleViewProps) {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container} {...res}>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonBack}>
            <Icon name="chevron-left" />
            voltar
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    color: colors.purple,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: colors.purple,
    fontFamily: fonts.heading,
    alignItems: 'center',
  },
  buttonBack: {
    fontSize: 16,
    color: colors.purple,
    fontFamily: fonts.text,
  },
});
