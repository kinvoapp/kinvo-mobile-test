import React from 'react'

import {
  StyleSheet,
  View, 
  Text
} from 'react-native'

import {
  Icon
} from 'material-bread'

import {
  AntDesign
} from '@expo/vector-icons'

import { formatDecimalValue } from '../util/functions'

import colors from '../util/colors'

export default (props) => {
  const {
    disabled,
    profitability
  } = props

  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        iconComponent={AntDesign}
        name={(profitability < 0) ? "arrowdown" : "arrowup"}
        size={9}
        color={ disabled 
                ? colors.text 
                : (profitability < 0) 
                  ? colors.red 
                  : colors.green }
      />
      <Text style={disabled 
                    ? styles.disabled 
                    : (profitability < 0) 
                      ? styles.badProfitability 
                      : styles.goodProfitability}>
        {`${formatDecimalValue(profitability)}%`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 5,
  },
  disabled: {
    fontSize: 12,
    color: colors.text,
    fontFamily: 'Montserrat-SemiBold',
  },
  goodProfitability: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.green
  },
  badProfitability: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.red
  },
})

