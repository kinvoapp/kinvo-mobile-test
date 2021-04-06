import React from 'react';
import {View, FlatList} from 'react-native';
import FrontCard from '../../components/frontCard';

const PAGES = [
    {imageUrl:  require("../../images/icons/acoes.png"), route: "Stocks", title: "Ações", subtitle: "Nacionais", new: false, testID: 'stocksBtn'},
    {imageUrl:  require("../../images/icons/funds.png"), route: "Funds", title: "Fundos", subtitle: "De Investimentos", new: true, testID: 'fundsBtn'},
    {imageUrl:  require("../../images/icons/previdencia.png"), route: "Pensions", title: "Previdências", subtitle: "Privadas", new: false, testID: 'pensionsBtn'}
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
            data={PAGES}
            keyExtractor={(item, index) => index + ""}
            renderItem={renderItems}
            inverted={false}
            initialNumToRender={3}
            horizontal={false}/>   
    </View>
  );
}

export default Dashboard;