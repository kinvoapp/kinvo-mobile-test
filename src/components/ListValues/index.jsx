import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import newRectangle from '../../assets/Icons/newRectangle.png';
import closedBtn from '../../assets/Icons/closedBtn.png';
import greenUp from '../../assets/Icons/greenUp.png';
import orangeDown from '../../assets/Icons/orangeDown.png';

/*
* this file render the all the three routes of my application.
* stocks, Funds and pensions
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
    <View key={name} style={styles.container}>
        <View style={styles.alignComponentItems}>
          <Text style={styles.title}>{name}</Text>
          {status === 1 && <Image style={styles.newRectangle} source={newRectangle}></Image>}
          {status === 2 && <Image style={styles.closedRectangle} source={closedBtn}></Image>}
          {type !== false && <Text style={styles.subtitle}>{type}</Text>}
          <View style={styles.textassid}>
            {<Text>Valor mínimo:</Text>}
            {<Text style={styles.values}> R$ {minimumValue}</Text>}
          </View>
          <View>
            {
              profitability !== false && profitability > 0
                ?
              <View style={styles.textassid}>
                {<Text>Rentabilidade:</Text>}
                {<Text style={styles.UpPercertage}><Image source={greenUp}></Image>{profitability}%</Text>}
              </View>
                :
              <View style={styles.textassid}>
                {<Text>Rentabilidade:</Text>}
                {<Text style={styles.DownPercertage}><Image source={orangeDown}></Image>{profitability}%</Text>}
              </View>
            }
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 185,
    top: 10,
    alignSelf: 'center',
    marginBottom: 10,
    margin: '5%',
    width: '95%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#DAE0E3',
    borderWidth: 1,
  },
  alignComponentItems: {
    left: 19,
    top: 20
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#627179',
  },
  subtitle: {
    width: '90%',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#627179',
    borderBottomColor: '#DAE0E3',
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  newRectangle: {
    position: 'absolute',
    left: '75%'
  },
  closedRectangle: {
    left: '70%'
  },
  textassid: {
    top: 21,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  values: {
    paddingLeft: '50%'
  },
  UpPercertage: {
    paddingLeft: '50%',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#AED335',
  },
  DownPercertage: {
    paddingLeft: '50%',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#E85D1F',
  }
});
