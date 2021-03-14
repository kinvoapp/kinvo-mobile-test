import React from 'react'

import {
  View, 
} from 'react-native'

import styles from './styles'

import stocksIcon from '../../assets/stocks.png'
import fundsIcon from '../../assets/funds.png'
import pensionsIcon from '../../assets/pensions.png'

import MainMenuCard from '../../components/MainMenuCard' 

import strings from '../../util/strings'

const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MainMenuCard
        image={stocksIcon}
        title={strings.stocks}
        subTitle={strings.national}
        onPress={() => navigation.navigate('Stocks')}
      />
      <MainMenuCard
        newCard
        image={fundsIcon}
        title={strings.funds}
        subTitle={strings.investiment}
        onPress={() => navigation.navigate('Funds')}
      />
      <MainMenuCard
        image={pensionsIcon}
        title={strings.pensions}
        subTitle={strings.private}
        onPress={() => navigation.navigate('Pensions')}
      />
    </View>
  )
}

export default index