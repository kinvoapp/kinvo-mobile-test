import { StyleSheet } from 'react-native'

export const getStyles = () =>
  StyleSheet.create({
    scrollContainer: {
      display: 'flex',
      flex: 1,
      alignSelf: 'center',
      paddingHorizontal: 20
    },
    alignView: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: 'red'
    },

  })
