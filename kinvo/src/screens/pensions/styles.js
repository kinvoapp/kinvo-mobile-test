import {
  StyleSheet
} from 'react-native'

import colors from '../../util/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerLeft: {
    marginLeft: 20,
  },
  filterOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    backgroundColor: colors.cardBorder,
    height: 1,
    marginTop: 10,
  },
  flatListContent: {
    padding: 10,
    paddingTop: 20,
  },
  noResultsView: {
    marginTop: 40, 
    marginHorizontal: 65,
  },
  noResultsText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    textAlign: 'center',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  noConnectionText: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 20,
  },
})

export default styles