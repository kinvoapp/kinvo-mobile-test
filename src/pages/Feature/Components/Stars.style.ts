import { StyleSheet } from 'react-native'

export const getStyles = () =>
  StyleSheet.create({
    bottomContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textDetails: {
      fontSize: 10,
      fontFamily: 'Montserrat-Medium',
      marginBottom: 15,
      color: '#627179'
    },
    star: {
      width: 17.11,
      height: 16.36,
      marginLeft: 6.89
    }
  })
