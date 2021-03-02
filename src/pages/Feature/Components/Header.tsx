import React from 'react';
//import { Feather as Icon } from '@expo/vector-icons'
import { Text, View, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getStyles } from './Header.style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import images from '../../../Themes/Images'

interface Props {
  title: string
  comeBack?: () => void
}

const Header: React.FC<Props> = ({title, comeBack}) => {
  const styles = getStyles()
  return (
    <View style={styles.mainContainer}>
      { comeBack && (
        <TouchableOpacity style={styles.buttonContainer} onPress={comeBack}>
        <Image source={images.leftArrow} style={styles.image}></Image>
      </TouchableOpacity>
      ) }
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header
