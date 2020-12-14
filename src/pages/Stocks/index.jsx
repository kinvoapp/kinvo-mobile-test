import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import Header from '../../components/header';
import ApiResponse from '../../components/ApiResponse';

import { getStocks } from '../../services/stocksApi';

import { addAllStocks } from '../../redux/actions/index';

function Stocks({ navigation, addStockAction, listStockReducer }) {
  return (
    <View style={styles.container}>
      <Header propText={'Ações'} backButton={true} navigation={navigation}/>
      <ApiResponse
        apiGet={getStocks}
        valueAdd={addStockAction}
        valueState={listStockReducer}
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
  addStockAction: (e) => dispatch(addAllStocks(e)),
});

const mapStateToProps= ({ listStockReducer }) => ({
  listStockReducer: listStockReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
