import React from 'react'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import { AirbnbRating } from 'react-native-ratings';

import StatusBadge from './StatusBadge'

import ProfitabilityDisplay from './ProfitabilityDisplay'

import colors from '../util/colors'
import strings from '../util/strings'

export default ({item}) => {
  const {
    name,
    status,
    minimumValue,
    rating,
    profitability,
    type
  } = item

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text 
            style={styles.name}
            numberOfLines={2}
            ellipsizeMode="tail">
            {name}
          </Text>
          <Text style={styles.type}>
            {type}
          </Text>
        </View>
        <View>
          <StatusBadge status={status} />
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <Text style={styles.labels}>
          {`${strings.rating}:`}
        </Text>
        <AirbnbRating
          showRating={false}
          defaultRating={rating}
          size={17}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.labels}>
          {`${strings.minimumValue}:`}
        </Text>
        <Text style={styles.type}>
        {`R$${minimumValue}`}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.labels}>
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
    marginHorizontal: 20,
    marginTop: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  headerTexts: {
    flexShrink: 1,
    marginRight: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  line: {
    flex: 1,
    backgroundColor: colors.background,
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
  labels: {
    fontSize: 10,
    color: colors.text
  },
  minimumValue: {
    fontSize: 12,
    color: colors.text
  },
})