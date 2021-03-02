import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getStyles } from './HomeScreen.style'
import Header from '../Components/Header'
import MainItem from '../Components/MainItem'
import images from '../../../Themes/Images'

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const styles = getStyles()

  const navigateToActions = () => navigation.navigate('ActionScreen')
  const navigateToFunds = () => navigation.navigate('FundsScreen')
  const navigateToSocialSecurity = () => navigation.navigate('SocialSecurityScreen')

  return (
    <>
      <Header title={'Desafio'} />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} bounces={false}>
        <MainItem
          title={'Ações'}
          subtitle={'Nacionais'}
          image={images.actions}
          onPressItem={navigateToActions}
          style={{width:28.32, height: 28.44, tintColor: '#6F4DBF' }}
        />
        <MainItem
          title={'Fundos'}
          subtitle={'De investimentos'}
          isNew={true}
          image={images.wallet}
          onPressItem={navigateToFunds}
          style={{width: 25.95, height: 26.11, tintColor: '#6F4DBF' }}
          />
        <MainItem
          title={'Previdências'}
          subtitle={'Privadas'}
          image={images.handMoney}
          onPressItem={navigateToSocialSecurity}
          style={{width:28.93, height: 31.73, tintColor: '#6F4DBF' }}
        />
      </ScrollView>
    </>
  )
}

export default HomeScreen;
