import React, { useEffect, useState } from 'react'

import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native'

import Button from './Button'

import colors from '../util/colors'
import strings from '../util/strings'

const axios = require('axios') 

const index = (props) => {
  const {
    endpoint,
    noConnectionText
  } = props;

  const [data, setData] = useState([])
  const [requestFailed, setRequestFailed] = useState(false)

  const getData = async () => {
    setRequestFailed(false)
    
    try{
      const response = await axios.get(endpoint)
      
      const {
        success,
        data, 
        error
      } = response.data
      
      if(success && error === null){
        setData(data)
        setRequestFailed(false)
      } else {
        setRequestFailed(true)
      }
    }catch(error){
      console.log(error)
      setRequestFailed(true)        
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      {
        (Array.isArray(data) && data.length) ? (
          props.render(data)
        ) : (
          requestFailed ? (
            <View style={styles.containerCenter}>
              <Text style={styles.errorText}>
                {strings.anErrorOcurred}
              </Text>
              <Text style={styles.noConnectionText}>
                {noConnectionText}
              </Text>
              <Button
                text={strings.tryAgain.toUpperCase()}
                onPress={getData}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  noConnectionText: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 20,
  },
})

export default index