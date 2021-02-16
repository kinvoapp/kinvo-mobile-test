import React from 'react';
import axios from 'axios';
import {FlatList, View, Text ,TouchableOpacity} from 'react-native';

import API from '../api/api';

export default class Stocks extends React.Component {
    state = {
        stocks: []
      }

    componentDidMount() {
        axios.get(`https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks`)
            .then(res => {
            const stocks = res.data;
            this.setState({ stocks });
            console.log(stocks);
        })
    }

    render() {
      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
        return (
          <>
         
            <View>  
              <FlatList
                data={this.state.stocks.data}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                  <TouchableOpacity>
                    <Text>{item.name}</Text>
                    <Text>{item.ticker}</Text>
                    <Text>{item.minimumValue}</Text>
                    <Text>{item.profitability}</Text>
                  </TouchableOpacity>
                )}/>
               
              
            </View>
          </>

        )
      }
    }