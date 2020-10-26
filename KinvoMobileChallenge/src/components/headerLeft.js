import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class HeaderLeft extends Component {
  render() {
    return (
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon onPress={() => {}} name="arrow-left" size={23} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 15,
  },
});
