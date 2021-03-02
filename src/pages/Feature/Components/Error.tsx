import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { getStyles } from './Error.style'

export const DEFAULT_ERROR_TITLE = 'Ocorreu um erro.'
export const DEFAULT_ERROR_MESSAGE = 'Não foi possível se conectar ao banco de fundos.'
export const DEFAULT_TRY_AGAIN_TEXT = 'Tentar novamente'

interface Props {
  title?: string
  message?: string
  onTryAgain: () => void
  style?: Record<string, unknown>
}

const Error = ({ onTryAgain, style, title = DEFAULT_ERROR_TITLE, message = DEFAULT_ERROR_MESSAGE }: Props) => {
  const styles = getStyles()
  return (
    <View style={[styles.container, style]} accessibilityLabel={'Error'}>
      <Text style={styles.title} accessibilityLabel={'ErrorTitle'}>
        {title}
      </Text>
      <Text style={styles.message} accessibilityLabel={'ErrorMessage'}>
        {message}
      </Text>
      <TouchableOpacity onPress={onTryAgain} style={styles.tryAgainContainer} accessibilityLabel={'TryAgainButton'}>
        <>
          <Text style={styles.tryAgainText}>{DEFAULT_TRY_AGAIN_TEXT}</Text>
        </>
      </TouchableOpacity>
    </View>
  )
}

export default Error
