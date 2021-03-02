import { Dimensions, StyleSheet } from 'react-native'
import addOpacity from '../Utils/addOpacity'

export const getStyles = () =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginVertical: 10,
      paddingHorizontal: 20,
      paddingTop: 16,
      paddingBottom: 6,
      display: 'flex',
      width: Dimensions.get('window').width - 40,
      borderRadius: 10,
      backgroundColor: '#fff',
      borderWidth: 0.8,
      borderColor: "#DAE0E3"
    },
    higherContent :{
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 15
    },
    viewTitle: {
      maxWidth: Dimensions.get('window').width - 140
    },
    title: {
      fontSize: 16,
      fontFamily: 'Montserrat-Bold',
      color: "#627179",
      marginBottom: 3
    },
    subtitle: {
      fontSize: 12,
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
    },
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
    valueDetail: {
      fontSize: 12,
      color: '#627179',
      fontFamily: 'Montserrat-SemiBold',
    },
    profitabilityDetail: {
      fontSize: 12,
      fontFamily: 'Montserrat-SemiBold',
    },
    arrow: {
      width: 8.38,
      height: 8.25
    },
    hearth: {
      width: 24,
      height: 24,
    },
    emptyHearth: {
      width: 24.01,
      height: 21.65,
    },
    star: {
      width: 17.11,
      height: 16.36,
      marginLeft: 6.89
    },
    status: {
      width: 56,
      height: 20,
      backgroundColor: '#40C5D6',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      alignSelf: 'flex-start'
    },
    itemStatus: {
      fontSize: 10,
      fontFamily: 'Montserrat-Medium',
      color: '#fff'
    },
    closedItem: {
      color: addOpacity('#627179',0.5)
    }
  })
