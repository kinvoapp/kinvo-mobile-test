import React from 'react'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import {
  IconButton
} from 'material-bread'

//Components
import ProfitabilityDisplay from './ProfitabilityDisplay'

import { formatDecimalValue } from '../util/functions'

import colors from '../util/colors'
import strings from '../util/strings'

export default (props) => {
  const {
    item: {
      name,
      ticker,
      favorited,
      minimumValue,
      profitability,
    },
    onFavorited
  } = props

  return (
    <View style={styles.container}>
      <Text 
        style={styles.name}
        numberOfLines={1}
        ellipsizeMode="tail">
        {name}
      </Text>
      <Text style={styles.ticker}>
        {ticker.toUpperCase()}
      </Text>
      <View style={styles.line} />

      <View style={styles.row}>
        <Text style={styles.label}>
          {`${strings.minimumValue}:`}
        </Text>
        <Text style={styles.value}>
          {`R$${formatDecimalValue(minimumValue)}`}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>
          {`${strings.profitability}:`}
        </Text>
        <ProfitabilityDisplay
          profitability={profitability}
        />
      </View>
      <IconButton
        style={styles.favoriteBtn}
        name={favorited ? "favorite" : "favorite-border"}
        color={colors.primary}
        size={24}
        onPress={() => {
          onFavorited(!favorited, props.item)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    padding: 18,
    borderRadius: 8,
    borderColor: colors.cardBorder,
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  favoriteBtn: {
    position: 'absolute',
    marginRight: 18,
    marginTop: 18,
    right: 0,
    top: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  line: {
    flex: 1,
    backgroundColor: colors.cardBorder,
    height: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: colors.text,
    marginBottom: 3,
  },
  ticker: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
    marginBottom: 20,
  },
  label: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: colors.text
  },
  value: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text
  }
})