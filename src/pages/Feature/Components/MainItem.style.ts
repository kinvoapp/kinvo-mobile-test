import { Dimensions, StyleSheet } from 'react-native'

export const getStyles = () =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center',
      paddingHorizontal: 20,
      display: 'flex',
      width: Dimensions.get('window').width - 40,
      height: 120,
      borderRadius: 10,
      backgroundColor: '#fff',
      borderWidth: 0.8,
      borderColor: "#DAE0E3"
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      borderRadius: 50,
      backgroundColor: "#ECF0F2",
      marginRight: 13
    },
    internView :{
      justifyContent: 'space-between',
      display: 'flex',
      flex: 1,
      flexDirection: 'row'
    },
    title: {
      fontSize: 16,
      fontFamily: 'Montserrat-Bold',
      color: "#6F4DBF",
      marginBottom: 5
    },
    subtitle: {
      fontSize: 10,
      fontFamily: 'Montserrat-SemiBold',
      color: '#627179'
    },
    newItem: {
      width: 56,
      height: 20,
      backgroundColor: '#40C5D6',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      alignSelf: 'center'
    },
    newItemText: {
      fontSize: 10,
      fontFamily: 'Montserrat-Medium',
      color: 'white'
    }
  })
