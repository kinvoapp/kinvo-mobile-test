import React, { useState, useEffect } from 'react';
import {View, Text, FlatList} from 'react-native';
import FundsCard from '../../components/fundsCard.js'
import ApiError from '../../components/apiError';
import LoadingIndicator from '../../components/loadingIndicator';

import {connect} from 'react-redux';
import * as fundsActions from '../../actions/funds';
import { bindActionCreators } from 'redux';

const Funds = (props) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [shouldCallApi, setShouldCallApi] = useState(false);

  useEffect(() => {
    if(props.funds.length == 0){
      setLoading(true)
      props.getFunds()
          .then(() => {
            setFetchError(false);

            if(props.funds.length == 0){
              setShouldCallApi(!shouldCallApi);
              setLoading(false)
            }
          })
          .catch(() => {
              setLoading(false)
              setFetchError(true)
          })
    }
  },[shouldCallApi]);

  const renderItems = ({item, index}) => {
    return (
        <FundsCard index={index} fund={item} />
        )
  }


  return (
    <View>
        {fetchError == true &&
          <ApiError callTryAgain={() => setShouldCallApi(!shouldCallApi)} />
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