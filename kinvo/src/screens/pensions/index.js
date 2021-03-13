import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  FlatList
} from 'react-native'

import {
  AntDesign
} from '@expo/vector-icons'

import {
	IconButton
} from 'material-bread'

import PensionsCard from '../../components/PensionCard'

import styles from './styles'

import colors from '../../util/colors'
import FilterOption from '../../components/FilterOption'
import strings from '../../util/strings'

const pensions = [
  {
    id: 1,
    name: "Adam XP Seg Prev I FIC FIM",
    type: "Multimercados",
    minimumValue: 100.00,
    tax: 0,
    redemptionTerm: 10,
    profitability: 10.59
  },
]

const index = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () =>  (
        <IconButton
          style={styles.headerLeft}
          name={'leftcircle'}
          size={24}
          color={colors.primary}
          iconComponent={AntDesign}
          onPress={() => navigation.goBack()}
        />
      )
    })
  })

  const [tax, setTax] = useState(false)
  const [minimumValue, setMinimumValue] = useState(false)
  const [redemptionTerm, setRedemptionTerm] = useState(false)

  const [filteredPensions, setFilteredPensions] = useState(pensions)

  useEffect(() => {
    filter()
  }, [tax, minimumValue, redemptionTerm])

  const filter = () => {
    let filtered = pensions
    
    if(tax){
      filtered = filtered.filter((pension) => pension.tax === 0)
    }
    
    if(minimumValue){
      filtered = filtered.filter((pension) => pension.minimumValue <= 100.0)
    }

    if(redemptionTerm){
      filtered = filtered.filter((pension) => pension.redemptionTerm === 1)
    }

    setFilteredPensions(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterOptions}>
        <FilterOption 
          text={strings.pensionFilter1}
          selected={tax}
          onPress={() => {
            setTax(!tax)
          }} 
        />
        <FilterOption
          text={strings.pensionFilter2}
          selected={minimumValue}
          onPress={() => {

            setMinimumValue(!minimumValue)
          }} 
        />
        <FilterOption 
          text={strings.pensionFilter3}
          selected={redemptionTerm}
          onPress={() => {
            setRedemptionTerm(!redemptionTerm)
          }} 
        />
      </View>
      <View style={styles.line} />
      {
        (filteredPensions.length > 0) ? (
          <FlatList
            data={filteredPensions}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
            renderItem={({item}) => {
              return(
                <PensionsCard
                  item={item}
                />
              )
            }}
            keyExtractor={pension => pension.id}
          />
        ) : (
          <View style={styles.noResultsView}>
            <Text style={styles.noResultsText}>
              {strings.noResults}
            </Text>
          </View>
        )
      }
    </View>
  )
}

export default index