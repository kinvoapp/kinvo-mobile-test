import React from 'react'

import {
  View, 
  FlatList,
} from 'react-native'

import {
  AntDesign
} from '@expo/vector-icons'

import {
	IconButton
} from 'material-bread'

import FundCard from '../../components/FundCard'

import styles from './styles'

import colors from '../../util/colors'

const funds = [
  {
     id: '1',
     name:"Alaska Black Institucional Fundo de Investimento de Ações",
     type:"FIA",
     minimumValue:500,
     rating:4,
     profitability:-52.05,
     status:2
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
        data={funds}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        renderItem={({item}) => {
          return(
            <FundCard
              item={item}
            />
          )
        }}
        keyExtractor={fund => fund.id}
      />
    </View>
  )
}

export default index