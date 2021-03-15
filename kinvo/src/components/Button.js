import React from 'react'

import {
  StyleSheet,
  TouchableOpacity, 
  Text,
} from 'react-native'

import colors from '../util/colors'

export default (props) => {
  const {
    text,
    onPress
  } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
        <Text style={styles.text}>
          {text}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: colors.primary
  },
  text: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white'
  },
})

