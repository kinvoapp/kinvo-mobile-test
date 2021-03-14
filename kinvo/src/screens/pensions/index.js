import React, { useEffect, useState } from 'react'

import {
  View,
  Text,
  FlatList,
} from 'react-native'

import {
  AntDesign
} from '@expo/vector-icons'

import {
	IconButton
} from 'material-bread'

import ScreenStateManager from '../../components/ScreenStateManager'

import PensionsCard from '../../components/PensionCard'
import FilterOption from '../../components/FilterOption'
import styles from './styles'

import colors from '../../util/colors'
import strings from '../../util/strings'

import { useSelector, useDispatch } from 'react-redux'
import * as UIActions from '../../store/actions/ui'

import { PENSIONS_API_ENDPOINT } from '../../util/constants';

import { sortAlphabetically } from '../../util/functions'

const axios = require('axios') 

const index = ({navigation}) => {
  const pensions = useSelector(state => state.ui.pensions)
  
  const [filteredPensions, setFilteredPensions] = useState(pensions)

  const [tax, setTax] = useState(false)
  const [minimumValue, setMinimumValue] = useState(false)
  const [redemptionTerm, setRedemptionTerm] = useState(false)

  useEffect(() => {
    getPensions()
  }, [])

  const dispatch = useDispatch()

   const setPensions = (pensions) => {
    dispatch(UIActions.setPensions(pensions))
  }

  const setRequestFailed = (resquestFailed) => {
    dispatch(UIActions.setRequestFailed(resquestFailed))
  }

  const getPensions = async () => {    
    try{
      const response = await axios.get(PENSIONS_API_ENDPOINT)
      
      const {
        success,
        data, 
        error
      } = response.data
      
      if(success && error === null){
        const orderedPensions = sortAlphabetically(data)

        setPensions(orderedPensions)
        setFilteredPensions(orderedPensions)
        setRequestFailed(false)
      } else {
        setRequestFailed(true)
      }
    }catch(error){
      console.log(error)
      setRequestFailed(true)        
    }
  }

  const filter = (tax, minimumValue, redemptionTerm) => {
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

  return (
    <ScreenStateManager
      getData={getPensions}
      data={pensions}
      noConnectionText={strings.noConnectionPensions}>
      <View style={styles.container}>
        <View style={styles.filterOptions}>
          <FilterOption 
            text={strings.pensionFilter1}
            selected={tax}
            onPress={() => {   
              setTax(!tax)
              filter(!tax, minimumValue, redemptionTerm)
            }} 
          />
          <FilterOption
            text={strings.pensionFilter2}
            selected={minimumValue}
            onPress={() => {
              setMinimumValue(!minimumValue)
              filter(tax, !minimumValue, redemptionTerm)
            }} 
          />
          <FilterOption 
            text={strings.pensionFilter3}
            selected={redemptionTerm}
            onPress={() => {
              setRedemptionTerm(!redemptionTerm)
              filter(tax, minimumValue, !redemptionTerm)
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
    </ScreenStateManager>
  )
}

export default index