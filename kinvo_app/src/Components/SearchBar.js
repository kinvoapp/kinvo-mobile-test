import React from 'react';
import {
  View, StyleSheet, TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderRadius: 29,
    backgroundColor: 'white',
    height: 35,
    paddingLeft: 50,
    paddingRight: 20,
    textAlignVertical: 'center',
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 14,
  },

  icon: {
    position: 'absolute',
    transform: [{ translateX: 16 }, { translateY: 8 }],
  },
});

const SearchBar = ({ text, onChangeText }) => (
  <View style={styles.container}>

    <TextInput
      value={text}
      style={styles.input}
      onChangeText={value => onChangeText(value)}

    />
    <Icon
      name="search"
      size={18}
      color="#9DA5AC"
      style={styles.icon}
    />
  </View>
);

export default SearchBar;
