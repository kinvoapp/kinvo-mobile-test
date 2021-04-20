import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const BackButton = () => {
  return (
    <TouchableOpacity style={{ marginRight: 0, marginLeft: 20 }} onPress={() => Actions.pop()}>
      <Image source={require('../../assets/icons/backButton/back.png')} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  );
};
