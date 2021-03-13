import React from 'react'

import {
  View, 
  Text
} from 'react-native'

import {
  AntDesign
} from '@expo/vector-icons'

import {
	IconButton
} from 'material-bread'

import styles from './styles'

import colors from '../../util/colors'



const data = [
  {
     id:1,
     name:"Alaska Black Institucional Fundo de Investimento de Ações",
     type:"FIA",
     minimumValue:500,
     rating:0,
     profitability:-52.05,
     status:0
  },
]

const index = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () =>  (
        <IconButton
          style={styles.headerLeft}
          name={'leftcircle'}
          size={24}
          color={colors.primary}
          iconComponent={AntDesign}
          onPress={() => navigation.goBack()}
        />
      )
    })
  })

  return (
    <View style={styles.container}>
      <Text>
        Funds Screen
      </Text>
    </View>
  )
}

export default index