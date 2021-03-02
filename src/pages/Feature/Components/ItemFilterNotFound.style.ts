import { Dimensions, StyleSheet } from 'react-native'

export const getStyles = () =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 72
    },
    message: {
      color: '#627179',
      fontFamily: 'Montserrat-Medium',
      fontSize: 12,
      letterSpacing: 0,
      textAlign: 'center',
      marginBottom: 20,
      maxWidth: 210
    }
  })
