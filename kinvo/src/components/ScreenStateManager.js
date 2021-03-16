import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native'

//Components
import Button from './Button'

import colors from '../util/colors'
import strings from '../util/strings'

const index = (props) => {
  const {
    requestFailed,
    data,
    getData,
    noConnectionText
  } = props;

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
    fontFamily: 'Montserrat-Bold',
    marginBottom: 12,
  },
  noConnectionText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    marginBottom: 20,
  },
})

export default index