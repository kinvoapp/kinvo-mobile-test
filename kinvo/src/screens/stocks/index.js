import React, { useEffect } from 'react'

import {
  View, 
  FlatList,
} from 'react-native'

import {
  AntDesign
} from '@expo/vector-icons'

import {
	IconButton
} from 'material-bread'

//Components
import ScreenStateManager from '../../components/ScreenStateManager'
import StockCard from '../../components/StockCard'

import styles from './styles'

import colors from '../../util/colors'
import strings from '../../util/strings'

import { sortStocks, sortAlphabetically } from '../../util/functions'

import { STOCKS_API_ENDPOINT } from '../../util/constants';

//Redux
import { useSelector, useDispatch } from 'react-redux'
import * as UIActions from '../../store/actions/ui'

const axios = require('axios')

const index = ({navigation}) => {
  const stocks = useSelector(state => state.ui.stocks)

  const dispatch = useDispatch()

  const setStocks = (stocks) => {
    dispatch(UIActions.setStocks(stocks))
  }

  const setRequestFailed = (resquestFailed) => {
    dispatch(UIActions.setRequestFailed(resquestFailed))
  }

  const onFavorited = (isFavorited, item) => {
    const updatedStocks = stocks.map((stock) => {
      if(stock.id === item.id){
        return {
          ...stock,
          favorited: isFavorited
        }
      }

      return stock
    })
  
    const orderedStocks = sortStocks(sortAlphabetically(updatedStocks))

    setStocks(orderedStocks)
  }

  useEffect(() => {
    getStocks()
  }, [])

  const getStocks = async () => {
    try {
      const response = await axios.get(STOCKS_API_ENDPOINT)

      const {
        success,
        data, 
        error
      } = response.data

      if(success && error === null) {
        const orderedStocks = sortAlphabetically(data).map((stock) => {
          return {
            ...stock,
            favorited: false
          }
        })
        
        setStocks(orderedStocks)
        setRequestFailed(false)
      } else {
        setRequestFailed(true)
      }
    }catch(error){
      console.log(error)
      setRequestFailed(true)      
    }
  }

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
      getData={getStocks}
      data={stocks}
      noConnectionText={strings.noConnectionStocks}>
      <View style={styles.container}>
        <FlatList
          data={stocks}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
          renderItem={({item}) => {
            return(
              <StockCard
                item={item}
                onFavorited={onFavorited}                  
              />
            )
          }}
          keyExtractor={stock => stock.id.toString()}
        />
      </View>
    </ScreenStateManager>
  )
}

export default index