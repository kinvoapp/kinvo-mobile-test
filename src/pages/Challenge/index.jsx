import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../../components/header';
import OptionsList from '../../components/optionsList';

import stockIcon from '../../assets/Icons/stockIcon.png';
import fundsIcon from '../../assets/Icons/fundsIcon.png';
import foresigthtsIcon from '../../assets/Icons/foresigthtsIcon.png';



const displayOptions = (optionTitle, optionsSubTitle, imagePath, newOption, navigation) => 
  <OptionsList
    optionTitle={optionTitle}
    optionsSubTitle={optionsSubTitle}
    imagePath={imagePath}
    newOption={newOption}
    navigation={navigation}
  />

export default function Challenge({ navigation }) {
  return (
    <View style={styles.container}>
      <Header propText={'Desafio'} backButton={false} navigation={navigation}/>
      {displayOptions('Ações', 'Nacionais', stockIcon, false, navigation)}
      {displayOptions('Fundos', 'De investimento', fundsIcon, true, navigation)}
      {displayOptions('Previdências', 'Privadas', foresigthtsIcon, false, navigation)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ECF0F2',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
