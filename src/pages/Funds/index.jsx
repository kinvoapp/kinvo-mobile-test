import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import Header from '../../components/header';
import ApiResponse from '../../components/ApiResponse';

import { getFunds } from '../../services/fundsApi';

import { addAllFunds } from '../../redux/actions/index';

function Funds({ navigation, addFundAction, listFundReducer }) {
  return (
    <View style={styles.container}>
      <Header propText={'Fundos'} backButton={true} navigation={navigation}/>
      <ApiResponse
        apiGet={getFunds}
        valueAdd={addFundAction}
        valueState={listFundReducer}
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
  addFundAction: (e) => dispatch(addAllFunds(e)),
});

const mapStateToProps= ({ listFundReducer }) => ({
  listFundReducer: listFundReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Funds);
