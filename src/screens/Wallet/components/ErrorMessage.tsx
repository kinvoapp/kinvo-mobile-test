import React from 'react'
import { View, Text } from 'react-native'

export default function ErrorMessage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text 
      style={{
        fontSize: 20,
        textAlign: 'center', 
        fontFamily: 'SFProDisplay'}}>
          Error fetching data..Check your network connection or try again later!
      </Text>
    </View>
  )
}
