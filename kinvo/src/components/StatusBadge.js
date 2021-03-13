import React from 'react'

import {
  StyleSheet,
  View, 
  Text
} from 'react-native'

import colors from '../util/colors'

import strings from '../util/strings'

export default ({status}) => {
  switch(status){
    case 0:
      return null
    case 1:
      return (
        <View style={[styles.container, styles.new]}>
           <Text style={styles.textNew}>{strings.new}</Text> 
        </View>
      )
    case 2:
      return (
        <View style={[styles.container, styles.closed]}>
           <Text style={styles.textClosed}>{strings.closed}</Text> 
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 4,
    paddingBottom: 3,
    borderRadius: 10,
  },
  new: {
    backgroundColor: colors.blue
  },
  closed: {
    backgroundColor: colors.gray
  },
  textNew: {
    fontSize: 10,
    color: 'white'
  },
  textClosed: {
    fontSize: 10,
    color: colors.badgeText
  }
})

