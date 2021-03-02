import React from 'react';
import { Text, View, Image } from 'react-native';
import { getStyles } from './Stars.style'
import image from '../../../Themes/Images'

interface Item {
  data: number
  styleStar?: StyleMedia
  styleTitle?: StyleMedia
}

const Stars: React.FC<Item> = ({data, styleStar, styleTitle}) => {
  const styles = getStyles()

  return (
      <>
        {data === 0 ? (
            <View style={{flexDirection: 'row'}}>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
            </View>
        ) : data === 1 ? (
            <View style={{flexDirection: 'row'}}>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
            </View>
        ) : data === 2 ? (
            <View style={{flexDirection: 'row'}}>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
            </View>
        ) : data === 3 ? (
            <View style={{flexDirection: 'row'}}>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
            </View>
        ) : data === 4 ? (
            <View style={{flexDirection: 'row'}}>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.emptyStar} style={[styles.star, styleStar]}></Image>
            </View>
        ) : data === 5 ? (
            <View style={{flexDirection: 'row'}}>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
              <Image source={image.star} style={[styles.star, styleStar]}></Image>
            </View>
        ): (<View/>)}
      </>
  )
}

export default Stars
