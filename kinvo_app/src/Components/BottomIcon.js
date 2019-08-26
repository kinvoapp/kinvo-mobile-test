import React from 'react';
import {
  Image, Text, TouchableOpacity, StyleSheet, View,
} from 'react-native';
import { CommonStyles, SWIDTH } from '../commonValues';


const styles = StyleSheet.create({
  bottomItem: {
    height: '100%',
    width: SWIDTH / 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  iconBottomBar: {
    height: 25,
    width: 25,
  },
  iconText: {
    color: '#707B81',
    fontSize: 10,
  },
});

const BottomIcon = ({
  indexPage, Img, title, selected, onPageSelect, Button,
}) => (
  <View>
    {Button ? (
      <TouchableOpacity style={styles.bottomItem} onPress={onPageSelect}>
        <Image
          style={[styles.iconBottomBar, { height: 50, width: 50 }]}
          source={Img}
        />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.bottomItem} onPress={() => onPageSelect(indexPage)}>
        <Image
          style={[styles.iconBottomBar, selected === indexPage
            ? { tintColor: CommonStyles.selectedColor } : {}]}
          source={Img}
        />
        <Text style={[styles.iconText, selected === indexPage
          ? { color: CommonStyles.selectedColor } : {}]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    )}
  </View>
);

export default BottomIcon;
