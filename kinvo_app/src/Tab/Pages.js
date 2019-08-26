import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PageList from '../PageData';
import { CommonStyles, SWIDTH } from '../commonValues';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
  topBar: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textTabContainer: {
    height: 50,
    width: (SWIDTH - 50) / PageList.length,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textTab: {
    fontFamily: CommonStyles.fontSemibold,
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: CommonStyles.fontColor,
  },
  iconContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageView: {
    flex: 1,
  },
  bottomBar: {
    height: 65,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#DAE0E3',
    flexDirection: 'row',

  },
  bottomItem: {
    height: '100%',
    width: SWIDTH / 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  iconBottomBar: {
    height: 60,
    width: 60,
  },
});
const selectedTabStyle = {
  backgroundColor: CommonStyles.backGroundColor,
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10,
};


const Pages = ({ backPage }) => {
  const [selected, setSelected] = useState(1);

  const onPageSelect = (id) => {
    setSelected(id);
  };

  const backPressed = () => {
    if (selected > 0) {
      setSelected(selected - 1);
    } else {
      backPage();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => backPressed()}>
          <Icon name="arrow-left" size={13} color="#707B81" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.textTabContainer, selected === PageList[0].id ? selectedTabStyle : {}]}
          onPress={() => onPageSelect(PageList[0].id)}
        >
          <Text style={styles.textTab}>{PageList[0].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.textTabContainer, selected === PageList[1].id ? selectedTabStyle : {}]}
          onPress={() => onPageSelect(PageList[1].id)}
        >
          <Text style={styles.textTab}>{PageList[1].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.textTabContainer, selected === PageList[2].id ? selectedTabStyle : {}]}
          onPress={() => onPageSelect(PageList[2].id)}
        >
          <Text style={styles.textTab}>{PageList[2].title}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pageView}>
        {PageList[selected].page}
      </View>
    </View>
  );
};

export default Pages;
