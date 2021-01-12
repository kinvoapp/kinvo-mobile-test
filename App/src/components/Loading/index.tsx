import React from 'react'
import { ActivityIndicator } from 'react-native'
import colors from '../../utils/colors'
import { LoadingContainer } from './styles'

export default function Loading() {
  return (
    <LoadingContainer>
      <ActivityIndicator size={80} color={colors.purple} />
    </LoadingContainer>
  )
}
