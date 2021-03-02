import { Dimensions, StyleSheet } from 'react-native'

export const getStyles = () =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: Dimensions.get('window').height-230
    },
    title: {
      color: '#627179',
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
      letterSpacing: 0,
      marginBottom: 12
    },
    message: {
      color: '#627179',
      fontFamily: 'Montserrat-Medium',
      fontSize: 12,
      letterSpacing: 0,
      textAlign: 'center',
      marginBottom: 20,
      maxWidth: 240
    },
    tryAgainText: {
      color: '#FFFFFF',
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 12,
      letterSpacing: 0,
    },
    tryAgainContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      textAlignVertical: 'center',
      backgroundColor: '#6F4DBF',
      height: 32,
      width: 179,
      borderRadius: 20
    }
  })
