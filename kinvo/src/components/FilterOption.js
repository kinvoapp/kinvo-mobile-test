import React from 'react'

import {
  StyleSheet,
  TouchableOpacity, 
  Text,
} from 'react-native'

import colors from '../util/colors'

export default (props) => {
  const {
    selected,
    text,
    onPress
  } = props;

  return (
    <TouchableOpacity
      style={selected ? [styles.container, styles.selected] : styles.container}
      onPress={onPress}>
        <Text style={selected ? styles.textSelected : styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 8,
    borderRadius: 15,
    backgroundColor: colors.cardBackground
  },
  selected: {
    backgroundColor: colors.primary
  },
  text: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text
  },
  textSelected: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white'
  }
})

