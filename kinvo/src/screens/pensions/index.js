import React, { useEffect, useState } from 'react'

import {
  View,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native'

import {
  AntDesign
} from '@expo/vector-icons'

import {
	IconButton
} from 'material-bread'

import PensionsCard from '../../components/PensionCard'
import FilterOption from '../../components/FilterOption'
import Button from '../../components/Button'
import styles from './styles'

import colors from '../../util/colors'
import strings from '../../util/strings'

import { PENSIONS_API_ENDPOINT } from '../../util/constants';

const axios = require('axios') 

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

  const [pensions, setPensions] = useState([])
  const [filteredPensions, setFilteredPensions] = useState([])
  const [tax, setTax] = useState(false)
  const [minimumValue, setMinimumValue] = useState(false)
  const [redemptionTerm, setRedemptionTerm] = useState(false)

  const [requestFailed, setRequestFailed] = useState(false)

  useEffect(() => {
    getPensions()
  }, [])

  useEffect(() => {
    filter()
  }, [tax, minimumValue, redemptionTerm])

  const getPensions = async () => {
    setRequestFailed(false)
    
    try{
      const response = await axios.get(PENSIONS_API_ENDPOINT)
      
      const {
        success,
        data, 
        error
      } = response.data
      
      if(success && error === null){
        const orderedData = data.sort((a, b) => a.name.localeCompare(b.name))

        setPensions(orderedData)
        setFilteredPensions(orderedData)
        setRequestFailed(false)
      } else {
        setRequestFailed(true)
      }
    }catch(error){
      console.log(error)
      setRequestFailed(true)        
    }
  }

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
      {
        (Array.isArray(pensions) && pensions.length) ? (
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
                  keyExtractor={pension => pension.id.toString()}
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
        ) : (
          requestFailed ? (
            <View style={styles.containerCenter}>
              <Text style={styles.errorText}>
                {strings.anErrorOcurred}
              </Text>
              <Text style={styles.noConnectionText}>
                {strings.noConnectionPensions}
              </Text>
              <Button
                text={strings.tryAgain.toUpperCase()}
                onPress={getPensions}
              />
            </View>
          ) : (
            <View style={styles.containerCenter}>
              <ActivityIndicator 
                size="large"
                color={colors.primary}
              />
            </View> 
          )
        )
      }
    </View>
  )
}

export default index