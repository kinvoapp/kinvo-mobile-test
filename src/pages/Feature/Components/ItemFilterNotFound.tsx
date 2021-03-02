import React from 'react'
import { Text, View } from 'react-native'

import { getStyles } from './ItemFilterNotFound.style'

export const DEFAULT_FILTER_MESSAGE = 'Nenhum resultado foi encontrado para os filtros selecionados.'

interface Props {
  message?: string
  style?: Record<string, unknown>
}

const ItemFilterNotFound = ({ style, message = DEFAULT_FILTER_MESSAGE }: Props) => {
  const styles = getStyles()
  return (
    <View style={[styles.container, style]} accessibilityLabel={'Filter'}>
      <Text style={styles.message} accessibilityLabel={'FilterMessage'}>
        {message}
      </Text>
    </View>
  )
}

export default ItemFilterNotFound
