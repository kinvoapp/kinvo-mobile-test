import { StyleSheet } from 'react-native'

export const getStyles = () =>
StyleSheet.create({
  status: {
    display: 'flex',
    height: 32,
    width: 93,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center'
  },
  itemStatus: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#627179'
  },
  buttonFilter: {
    backgroundColor: '#6F4DBF',
  },
  textFilter: {
    color: '#FFF'
  }
})
