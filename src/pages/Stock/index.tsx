import React, {useCallback, useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    FlatList,
    View,
    Text,
    RefreshControl,
    TouchableOpacity    
} from 'react-native';
import { 
    Container, 
    Header, 
    HeaderTitle, 
    List, 
    CardContainer, 
    CardHeader,
    HeartkIcon,
    CardTitle,
    CardSubTitle,
    Line,
    ViewLine,
    ViewLineText
  } from './styles';
import api from '../../services/api';
import Load from '../../components/Load';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
import Internet from '../../components/Internet';
import NetInfo from "@react-native-community/netinfo";
import formatValue from '../../utils/formatValue';
import formatRent from '../../utils/formatRent';

export interface Stock {
    id: number;
    name: string;
    ticker: string;
    minimumValue: number;
    profitability: number; 
    isFavorite: boolean;
}
export interface Service {
    sucess: boolean;
    data: Stock[];
    error: string;
}

const Stock: React.FC = () => {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setLoading] = React.useState(true);    

    const [isOffline, setOfflineStatus] = useState(false);
  
    useEffect(() => {
      const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
        const offline = !(state.isConnected && state.isInternetReachable);
        setOfflineStatus(offline);
      });

      return () => removeNetInfoSubscription();
    }, []);    

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
    }, []);

    const { goBack } = useNavigation();
    function handleNavigateBack() {
      goBack();
    }    
    
    useEffect(() => {
        async function loadStocks(): Promise<void> {
            const response = await api.get<Service[]>(`stocks`);
            setStocks(
            response.data.data.sort((a, b) => {
                if (a.isFavorite || (a.name < b.name)) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })
            );
            setRefreshing(false);
            setLoading(false);
        }
        loadStocks();
    }, [refreshing]);
      
    const toggleFavorite = useCallback((stock: Stock) => {
        setStocks(
            stocks.map(item => 
                    item.id === stock.id 
                    ? {...item, isFavorite : !item.isFavorite} 
                    : item 
                ).sort((a, b) => {
                    if(a.isFavorite && b.isFavorite){
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                    }            
                    if(a.isFavorite && !b.isFavorite){
                        return -1;
                    }
                    if(!a.isFavorite && b.isFavorite){
                        return 1;
                    }  
                    if(!a.isFavorite && !b.isFavorite){
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                    }                       
                    return 0;
                }))
      }, [stocks]);



    const ItemView = ({item}) => {
        return (
            <CardContainer onPress={() => toggleFavorite(item)}>
                <CardHeader>
                    <View>
                        <CardTitle>{item.name}</CardTitle>
                        <CardSubTitle>{item.ticker}</CardSubTitle>                      
                    </View>
                    {item.isFavorite ? 
                        <HeartkIcon source={require('../../assets/stocks/heart.png')} />
                    :
                        <Icon name='heart' size={20} color="#6F4DBF" />
                    }
                    
                </CardHeader>
                
                <Line />
                <ViewLine>
                    <ViewLineText>Valor mínimo:</ViewLineText>
                    <Text>{formatValue(item.minimumValue)}</Text>
                </ViewLine>
                <ViewLine>
                    <ViewLineText>Rentabilidade:</ViewLineText>
                    <Text style={{color:formatRent(item.profitability)}}><Icon name={item.profitability > 0 ? 'arrow-down' : 'arrow-up'} size={15} color={formatRent(item.profitability)} />{item.profitability}</Text>
                </ViewLine>
            </CardContainer>
        );
      };


    if(loading)
      return <Load />
    return (
        <Container>
            <Header>
                <TouchableOpacity style={{ backgroundColor:"#6F4DBF", borderRadius:10}}>
                    <Icon
                        name="arrow-left"
                        size={20}
                        color='#FFFFFF'
                        onPress={handleNavigateBack}
                    />
                </TouchableOpacity>                   
                <HeaderTitle>Ações</HeaderTitle>
            </Header>
            {isOffline ? <Internet />:  
                <List>
                    <FlatList
                        data={stocks}
                        renderItem={ItemView}
                        keyExtractor={(item, index) => index.toString()}
                        refreshControl={
                            <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            />
                            }
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={
                            <Text style={{color:'#627179', fontSize:18, textAlign:'center', paddingTop:30}}>Nenhum resultado foi encontrado.</Text>
                        }                      
                    />
                </List>
            }
        </Container>

    );

}

export default Stock;