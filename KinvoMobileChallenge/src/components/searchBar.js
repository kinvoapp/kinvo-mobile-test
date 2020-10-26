import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';
import {StyleSheet} from 'react-native';

export default class SearchProductsBar extends Component {
  render() {
    return (
      <SearchBar
        searchIcon={{size: 30}}
        value={this.props.dataFromParent}
        lightTheme={true}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBar}
      />
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#F5F8FA',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },

  searchBar: {
    backgroundColor: 'white',
    borderRadius: 40,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 17,
    marginRight: 17,
  },
});
