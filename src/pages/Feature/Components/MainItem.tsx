import React from 'react';
import { Text, View, Image, StyleProp, ImageStyle } from 'react-native';
import { getStyles } from './MainItem.style'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  title: string
  subtitle: string
  image: Object
  onPressItem: () => void
  style?: StyleProp<ImageStyle>
  isNew?: Boolean
}

const MainItem: React.FC<Props> = ({title, subtitle, image, style, isNew, onPressItem}) => {
  const styles = getStyles()
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPressItem}>
      <View style={styles.imageContainer} >
        <Image source={image} style={style} />
      </View>
      <View style={styles.internView}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        {isNew && (
          <View style={styles.newItem}>
            <Text style={styles.newItemText}>Novo</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default MainItem
