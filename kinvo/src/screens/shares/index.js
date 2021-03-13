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

import ShareCard from '../../components/ShareCard'

import styles from './styles'

import colors from '../../util/colors'

const shares = [
  {
     id:1,
     name:"Magazine Luiza",
     ticker:"MGLU3",
     minimumValue:100,
     profitability:27.05,
     favorited: true
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
        data={shares}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        renderItem={({item}) => {
          return(
            <ShareCard
              item={item}
            />
          )
        }}
        keyExtractor={share => share.id}
      />
    </View>
  )
}

export default index