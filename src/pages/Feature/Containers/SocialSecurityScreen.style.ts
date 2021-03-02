import { Dimensions, StyleSheet } from 'react-native'

export const getStyles = () =>
  StyleSheet.create({
    scrollContainer: {
      display: 'flex',
      flex: 1,
      alignSelf: 'center',
      paddingHorizontal: 20
    },
    filterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginVertical: 20
    },
    separator: {
      width: Dimensions.get('window').width - 40,
      alignSelf: 'center',
    },
    loadingContainer: {
      height: Dimensions.get('window').height-330,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
