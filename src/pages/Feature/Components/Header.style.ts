import { StyleSheet } from 'react-native'
//import { CustomTheme } from '../../../Themes/Entities'

export const getStyles = () =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
      display: 'flex',
      height: 100,
      backgroundColor: '#fff',
      borderWidth: 0.8,
      borderColor: "#DAE0E3",
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      borderRadius: 50,
      backgroundColor: "#6F4DBF",
      marginRight: 13
    },
    title: {
      fontSize: 20,
      fontFamily: 'Montserrat-Bold',
      color: "#6F4DBF"
    },
    image: {
      tintColor: 'white',
      height: 7.25,
      width: 3.94
    }
  })
