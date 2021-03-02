import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import addOpacity from '../Utils/addOpacity'
import { getStyles } from './Separator.style'

export const DEFAULT_COLOR_OPACITY = 0.5

interface Props {
  color?: string
  style?: StyleProp<ViewStyle>
}

const Separator = ({ color, style }: Props) => {
  const styles = getStyles()
  return (
    <View
      accessibilityLabel={'Separator'}
      style={[styles.mainContainer, style, !!color && { backgroundColor: addOpacity(color, 0.5) }]}
    />
  )
}

export default Separator
