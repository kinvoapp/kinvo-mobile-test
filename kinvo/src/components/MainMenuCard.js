import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import colors from '../util/colors'

export default (props) => {
  const {
    title,
    subTitle,
    image,
    onPress
  } = props

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={onPress}>
      <View style={styles.circle}>
        <Image 
          style={styles.image} 
          source={image} 
          resizeMode="contain" 
        />
      </View>
      <View>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subTitle}>
          {subTitle}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    flexDirection: 'row',
    padding: 20,
    paddingVertical: 32,
    borderRadius: 8,
    borderColor: colors.cardBorder,
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    marginRight: 12,
  },
  image: {
    width: 28,
    height: 28,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 10,
    color: colors.text
  },
})