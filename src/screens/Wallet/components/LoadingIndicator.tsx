import React from 'react'
import { View, ActivityIndicator } from 'react-native'

export default function LoadingIndicator() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0DD1E3" />
    </View>
  )
}
