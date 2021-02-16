import React from 'react';
import axios from 'axios';
import {FlatList, View, Text ,TouchableOpacity} from 'react-native';

import API from '../api/api';

export default class Funds extends React.Component {
    state = {
        funds: []
      }

    componentDidMount() {
        axios.get(`https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds`)
            .then(res => {
            const funds = res.data;
            this.setState({ funds });
            console.log(funds);
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
                data={this.state.funds.data}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                  <TouchableOpacity>
                    <Text>{item.name}</Text>
                    <Text>{item.type}</Text>
                    <Text>{item.minimumValue}</Text>
                    <Text>{item.rating}</Text>
                    <Text>{item.profitability}</Text>
                    <Text>{item.status}</Text>
                  </TouchableOpacity>
                )}/>
               
              
            </View>
          </>

        )
      }
    }