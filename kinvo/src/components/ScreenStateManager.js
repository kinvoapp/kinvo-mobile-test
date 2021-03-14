import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native'

import Button from './Button'

import colors from '../util/colors'
import strings from '../util/strings'

import { useSelector } from 'react-redux'

const index = (props) => {
  const {
    data,
    getData,
    noConnectionText
  } = props;

  const requestFailed = useSelector(state => state.ui.requestFailed)

  return (
    <View style={styles.container}>
      {
        (Array.isArray(data) && data.length) ? (
          props.children
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