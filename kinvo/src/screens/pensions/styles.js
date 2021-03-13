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
    backgroundColor: colors.text,
    height: 0.5,
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
    color: colors.text,
    textAlign: 'center',
  }
})

export default styles