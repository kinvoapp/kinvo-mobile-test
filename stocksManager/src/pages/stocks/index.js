import React, { useState, useEffect } from 'react';
import {View, Text, FlatList} from 'react-native';
import StockCard from '../../components/stockCard.js'


//redux things
import {connect} from 'react-redux';
import * as stocksActions from '../../actions/stocks';
import { bindActionCreators } from 'redux';

const Stocks = (props) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [stocksIdToFavorite, setStocksIdToFavorite] = useState(0);

  useEffect(() => {
    if(stocks.length == 0){
      //getStocks();
      setLoading(true)
      props.getStocks()
          .then(() => {
            setLoading(false)
            console.log(props);
            setStocks(props.stocks)
            console.log(stocks);
          })
          .catch(() => {
              setLoading(false)
              setFetchError(true)
          })
    }
  },[stocks.length]);

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
        <FlatList 
            data={props.stocks}
            keyExtractor={(item, index) => index + ""}
            renderItem={renderItems}
            inverted={false}
            initialNumToRender={3}
            refreshing={loading}
            onRefresh={e => getStocks()}
            horizontal={false}/>   
    </View>
  );
}

const mapStateToProps = state => ({
  stocks: state.stocks,
})

const mapDispatchToProps = dispatch => 
bindActionCreators({...stocksActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);