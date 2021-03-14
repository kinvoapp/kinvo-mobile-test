import React from 'react'

import {
  View, 
} from 'react-native'

//Icons
import stocksIcon from '../../assets/stocks.png'
import fundsIcon from '../../assets/funds.png'
import pensionsIcon from '../../assets/pensions.png'

//Components
import MainMenuCard from '../../components/MainMenuCard' 

import styles from './styles'

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