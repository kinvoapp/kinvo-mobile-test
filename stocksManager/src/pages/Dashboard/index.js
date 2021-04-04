import React, { useState } from 'react';
import {View, Text, FlatList} from 'react-native';
import FrontCard from '../../components/frontCard';

const CATEGORIES = [
    {imageUrl:  require("../../images/icons/acoes.png"), route: "Stocks", title: "Ações", subtitle: "Nacionais", new: false},
    {imageUrl:  require("../../images/icons/funds.png"), route: "Funds", title: "Fundos", subtitle: "De Investimentos", new: true},
    {imageUrl:  require("../../images/icons/previdencia.png"), route: "Previdences", title: "Previdências", subtitle: "Privadas", new: false}
]

const Dashboard = (props) => {

  const renderItems = ({item, index}) => {
    return (
        <FrontCard index={index} category={item} />
        )
  }

  return (
    <View>
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item, index) => index + ""}
            renderItem={renderItems}
            inverted={false}
            initialNumToRender={3}
            horizontal={false}/>   
    </View>
  );
}

export default Dashboard;