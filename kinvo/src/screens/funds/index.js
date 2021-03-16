import React, { useState } from 'react'

import { useFocusEffect } from '@react-navigation/native'

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
import FundCard from '../../components/FundCard'

import styles from './styles'

import colors from '../../util/colors'
import strings from '../../util/strings'

import { sortAlphabetically } from '../../util/functions'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import * as UIActions from '../../store/actions/ui'

import api from '../../services/api'

const index = ({navigation}) => {
  const funds = useSelector(state => state.ui.funds)

  const dispatch = useDispatch()

  const [requestFailed, setRequestFailed] = useState(false)

  const setFunds = (funds) => {
    dispatch(UIActions.setFunds(funds))
  }

  useFocusEffect(
    React.useCallback(() => {
      getFunds()
    }, [])
  )

  const getFunds = async () => {
    setRequestFailed(false)
    
    try {
      const response = await api.get('funds', { timeout: 5000})

      const {
        success,
        data, 
        error
      } = response.data
      
      if(success && error === null) {
        const orderedFunds = sortAlphabetically(data)
        
        setFunds(orderedFunds)
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
      requestFailed={requestFailed}
      getData={getFunds}
      data={funds}
      noConnectionText={strings.noConnectionFunds}>
        <View style={styles.container}>
          <FlatList
            data={funds}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
            renderItem={({item}) => {
              return(
                <FundCard
                  item={item}
                />
              )
            }}
            keyExtractor={fund => fund.id.toString()}
          />
        </View>
    </ScreenStateManager>
  )
}

export default index