import React, { useState, useEffect } from 'react';
import {View, Text, FlatList} from 'react-native';
import FundsCard from '../../components/fundsCard.js'


//redux things
import {connect} from 'react-redux';
import * as fundsActions from '../../actions/funds';
import { bindActionCreators } from 'redux';

const Funds = (props) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    if(props.funds.length == 0){
      //getStocks();
      setLoading(true)
      props.getFunds()
          .then(() => {
            setLoading(false)
            console.log(props);
          })
          .catch(() => {
              setLoading(false)
              setFetchError(true)
          })
    }
  },[props.funds.length]);

  const renderItems = ({item, index}) => {
    return (
        <FundsCard index={index} fund={item} />
        )
  }


  return (
    <View>
        <FlatList 
            data={props.funds}
            keyExtractor={(item, index) => index + ""}
            renderItem={renderItems}
            inverted={false}
            initialNumToRender={3}
            refreshing={loading}
            //onRefresh={e => getStocks()}
            horizontal={false}/>   
    </View>
  );
}

const mapStateToProps = state => ({
  funds: state.funds,
})

const mapDispatchToProps = dispatch => 
bindActionCreators({...fundsActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Funds);