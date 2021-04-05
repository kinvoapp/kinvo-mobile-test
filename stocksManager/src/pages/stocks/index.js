import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import StockCard from '../../components/stockCard.js'
import ApiError from '../../components/apiError';
import LoadingIndicator from '../../components/loadingIndicator';

//redux things
import {connect} from 'react-redux';
import * as stocksActions from '../../actions/stocks';
import { bindActionCreators } from 'redux';

const Stocks = (props) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [stocksIdToFavorite, setStocksIdToFavorite] = useState(0);
  const [apiCall, setApiCall] = useState(false);

  useEffect(() => {
    if(stocks.length == 0){
      //getStocks();
      setLoading(true)
      props.getStocks()
          .then(() => {
            setStocks(props.stocks)
            setFetchError(false);

            if(stocks.length == 0){
              setApiCall(!apiCall);
              setLoading(false);
            }
          })
          .catch(() => {
              setLoading(false);
              setFetchError(true);
          })
    }
  },[apiCall]);

  useEffect(() => {
    if(props.stocks.length > 0 && stocksIdToFavorite != 0){
      props.updateFavorites(stocksIdToFavorite).then(() => setStocks(props.stocks));
      setStocksIdToFavorite(0);
    }
  },[stocksIdToFavorite]);

  const renderItems = ({item, index}) => {
    return (
        <StockCard setLikedStock={(stockId) => setStocksIdToFavorite(stockId)} index={index} stock={item} />
        )
  }


  return (
    <View>
        {fetchError &&
          <ApiError setApiCall={() => setApiCall(!apiCall)} />
        }

        {!fetchError && loading &&
          <LoadingIndicator/>
        }

        {!fetchError && !loading &&
        <FlatList 
            data={props.stocks}
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
  stocks: state.stocks,
})

const mapDispatchToProps = dispatch => 
bindActionCreators({...stocksActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);