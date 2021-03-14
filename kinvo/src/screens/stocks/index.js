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

import ScreenStateManager from '../../components/ScreenStateManager'

import StockCard from '../../components/StockCard'

import styles from './styles'

import colors from '../../util/colors'
import strings from '../../util/strings'

import { STOCKS_API_ENDPOINT } from '../../util/constants';

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
    <ScreenStateManager
      endpoint={STOCKS_API_ENDPOINT}
      noConnectionText={strings.noConnectionStocks}
      render={(data) => (
        <View style={styles.container}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
            renderItem={({item}) => {
              return(
                <StockCard
                  item={item}
                />
              )
            }}
            keyExtractor={stock => stock.id.toString()}
          />
        </View>
      )}
    />
  )
}

export default index