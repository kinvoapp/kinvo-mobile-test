import React, { useState, useEffect } from 'react';
import {View, Text, FlatList} from 'react-native';
import FundsCard from '../../components/fundsCard.js'
import ApiError from '../../components/apiError';
import LoadingIndicator from '../../components/loadingIndicator';

//redux things
import {connect} from 'react-redux';
import * as fundsActions from '../../actions/funds';
import { bindActionCreators } from 'redux';

const Funds = (props) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [apiCall, setApiCall] = useState(false);

  useEffect(() => {
    if(props.funds.length == 0){
      setLoading(true)
      props.getFunds()
          .then(() => {
            setLoading(false)
            console.log(props);
            setFetchError(false);

            if(props.funds.length == 0){
              setApiCall(!apiCall);
              setLoading(false)
            }
          })
          .catch(() => {
              setLoading(false)
              setFetchError(true)
          })
    }
  },[apiCall]);

  const renderItems = ({item, index}) => {
    return (
        <FundsCard index={index} fund={item} />
        )
  }


  return (
    <View>
        {fetchError == true &&
          <ApiError setApiCall={() => setApiCall(!apiCall)} />
        }
        
        {!fetchError && loading &&
          <LoadingIndicator/>
        }
        {!fetchError && !loading &&
        <FlatList 
            data={props.funds}
            keyExtractor={(item, index) => index + ""}
            renderItem={renderItems}
            inverted={false}
            initialNumToRender={3}
            refreshing={loading}
            //onRefresh={e => getStocks()}
            horizontal={false}/>
        }   
    </View>
  );
}

const mapStateToProps = state => ({
  funds: state.funds,
})

const mapDispatchToProps = dispatch => 
bindActionCreators({...fundsActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Funds);