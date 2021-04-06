import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import StockCard from '../../components/stockCard.js'
import ApiError from '../../components/apiError';
import LoadingIndicator from '../../components/loadingIndicator';

import {connect} from 'react-redux';
import * as stocksActions from '../../actions/stocks';
import { bindActionCreators } from 'redux';

const Stocks = (props) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [favoritedStock, setFavoritedStock] = useState(0);
  const [shouldCallApi, setShouldCallApi] = useState(false);

  useEffect(() => {
    if(stocks.length == 0){
      setLoading(true)
      props.getStocks()
          .then(() => {
            setStocks(props.stocks)
            setFetchError(false);

            if(stocks.length == 0){
              setShouldCallApi(!shouldCallApi);
              setLoading(false);
            }
          })
          .catch(() => {
              setLoading(false);
              setFetchError(true);
          })
    }
  },[shouldCallApi]);

  useEffect(() => {
    if(props.stocks.length > 0 && favoritedStock != 0){
      props.setFavoritedStock(favoritedStock).then(() => setStocks(props.stocks));
      setFavoritedStock(0);
    }
  },[favoritedStock]);

  const renderItems = ({item, index}) => {
    return (
        <StockCard setLikedStock={(stockId) => setFavoritedStock(stockId)} index={index} stock={item} />
        )
  }


  return (
    <View>
        {fetchError &&
          <ApiError callTryAgain={() => setShouldCallApi(!shouldCallApi)} />
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