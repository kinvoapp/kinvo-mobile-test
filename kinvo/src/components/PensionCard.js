import React from 'react'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

//Components
import ProfitabilityDisplay from './ProfitabilityDisplay'

import { formatDecimalValue } from '../util/functions'

import colors from '../util/colors'
import strings from '../util/strings'

export default ({item}) => {
  const {
    name,
    type,
    minimumValue,
    tax,
    redemptionTerm,
    profitability,
  } = item

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text 
          style={styles.name}
          numberOfLines={2}
          ellipsizeMode="tail">
          {name}
        </Text>
        <Text style={styles.type}>
          {type.toUpperCase()}
        </Text>
      </View>
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
          {`${strings.tax}:`}
        </Text>
        <Text style={styles.value}>
          {`${formatDecimalValue(tax)}%`}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>
          {`${strings.redemptionTerm}:`}
        </Text>
        <Text style={styles.value}>
          {`D+${redemptionTerm}`}
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
    marginBottom: 20,
  },
  header: {
    flex: 1,
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
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 3,
  },
  type: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 20
  },
  label: {
    fontSize: 10,
    color: colors.text
  },
  value: {
    fontSize: 12,
    color: colors.text
  },
})