import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import Header from '../../components/header';
import ApiResponse from '../../components/ApiResponse';

import { getPension } from '../../services/pensionsApi';

import { addAllPensions } from '../../redux/actions/index';

function Pension({ navigation, addPensionAction, listPensionReducer }) {
  return (
    <View style={styles.container}>
      <Header propText={'Previdências'} backButton={true} navigation={navigation}/>
      <ApiResponse
        apiGet={getPension}
        valueAdd={addPensionAction}
        valueState={listPensionReducer}
        order={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '85%',
    backgroundColor: '#ECF0F2',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

const mapDispatchToProps = (dispatch) => ({
  addPensionAction: (e) => dispatch(addAllPensions(e)),
});

const mapStateToProps= ({ listPensionReducer }) => ({
  listPensionReducer: listPensionReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Pension);
