import React from 'react'

import {
  View, 
  FlatList
} from 'react-native'

import {
  AntDesign
} from '@expo/vector-icons'

import {
	IconButton
} from 'material-bread'

import PensionsCard from '../../components/PensionCard'

import styles from './styles'

import colors from '../../util/colors'

const pensions = [
  {
    id: 1,
    name: "Adam XP Seg Prev I FIC FIM",
    type: "Multimercados",
    minimumValue: 100.00,
    tax: 0,
    redemptionTerm: 10,
    profitability: 10.59
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
      <FlatList
        data={pensions}
        contentContainerStyle={styles.flatListContent}
        renderItem={({item}) => {
          return(
            <PensionsCard
              item={item}
            />
          )
        }}
        keyExtractor={pension => pension.id}
      />
    </View>
  )
}

export default index