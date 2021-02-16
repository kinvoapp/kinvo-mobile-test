import React from 'react';
import axios from 'axios';
import {FlatList, View, Text ,TouchableOpacity} from 'react-native';

import API from '../api/api';

export default class Pension extends React.Component {
    state = {
        pension: []
      }

    componentDidMount() {
        axios.get(`https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/pension`)
            .then(res => {
            const pension = res.data;
            this.setState({ pension });
            console.log(pension);
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
                data={this.state.pension.data}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                  <TouchableOpacity>
                    <Text>{item.name}</Text>
                    <Text>{item.type}</Text>
                    <Text>{item.minimumValue}</Text>
                    <Text>{item.tax}</Text>
                    <Text>{item.redemptionTerm}</Text>
                    <Text>{item.profitability}</Text>
                  </TouchableOpacity>
                )}/>
            </View>
          </>
        )
      }
    }