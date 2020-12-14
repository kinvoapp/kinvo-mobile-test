import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import newRectangle from '../../assets/Icons/newRectangle.png';

/*
* this file render the three navigable components on 'Desafio' page
*/

export default function OptionsList({
    optionTitle,
    optionsSubTitle,
    imagePath,
    newOption=false,
    navigation
  }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(optionTitle)}>
      <View style={styles.imageContainer}>
        <Image source={imagePath}/>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionTitle}>{optionTitle}</Text>
          <Text style={styles.optionSubTitle}>{optionsSubTitle}</Text>
        </View>
        { newOption && <Image style={styles.newRectangle} source={newRectangle}></Image> }
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    top: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#DAE0E3',
    borderWidth: 1,
  },
  imageContainer: {
    left: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  optionTextContainer: {
    left: 12
  },
  optionTitle: {
    color: '#6F4DBF',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  optionSubTitle: {
    color: '#627179',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
  },
  newRectangle: {
    left:"240%"
  },
});
