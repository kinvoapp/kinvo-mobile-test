import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import newRectangle from '../../assets/Icons/newRectangle.png';

/*
* this file render the 'common' and 'closed' components for 'Fundos' page
*/

export default function OptionsList({
    stock: {
      id,
      name,
      ticker=false,
      minimumValue,
      profitability,
      type=false,
      rating=false,
      status=false,
      tax=false,
      redemptionTerm=false,
    }
  }) {
  return (
    <TouchableOpacity key={name} style={styles.container}>
        <View style={styles.alignItems}>
          <Text style={styles.title}>{name}</Text>
          {type && <Text style={styles.subtitle}>{type}</Text>}
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
    margin: 20,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#DAE0E3',
    borderWidth: 1,
  },
  alignItems: {
    left: 19
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#627179',
  },
  subtitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#627179',
  }
});
