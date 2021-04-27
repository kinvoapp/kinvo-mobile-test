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
    CardTitle,
    CardSubTitle,
    Line,
    ViewLine,
    ViewLineText,
    Badge
  } from './styles';
import { AirbnbRating } from '../../utils/react-native-ratings';
import api from '../../services/api';
import Load from '../../components/Load';
import formatStatus from '../../utils/formatStatus';
import orderAlpha from '../../utils/orderAlpha';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
import Internet from '../../components/Internet';
import NetInfo from "@react-native-community/netinfo";
import formatValue from '../../utils/formatValue';
import formatRent from '../../utils/formatRent';

export interface Fund {
    id: number;
    name: string;
    ticker: string;
    type: string;
    minimumValue: number;
    rating: number;
    profitability: number; 
    isFavorite?: boolean;
    status: number;
    statusText: string;
}

export interface Service {
    sucess: boolean;
    data: Fund[];
    error: string;
}

const Fund: React.FC = () => {
    const [funds, setFunds] = useState<Fund[]>([]);
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

    const { goBack } = useNavigation();
    function handleNavigateBack() {
      goBack();
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
    }, []);
    
    useEffect(() => {
        async function loadFunds(): Promise<void> {
            const response = await api.get<Service[]>(`funds`);
            const formattedData = response.data.data.map(object => ({
                ...object,
                statusText: formatStatus(object.status),
                minimumValue: formatValue(object.minimumValue),
            }));
            setFunds(
                orderAlpha(formattedData)
            )
            setRefreshing(false);
            setLoading(false);
        }
        loadFunds();
    }, [refreshing]);
      
    const toggleFavorite = useCallback((stock: Fund) => {
        setFunds(
            funds.map(item => 
                    item.id === stock.id 
                    ? {...item, isFavorite : !item.isFavorite} 
                    : item 
                ).sort((a, b) => {
                    if (a.isFavorite || (a.name < b.name)) {
                        return -1;
                      }
                      if (a.name > b.name) {
                        return 1;
                      }
                      return 0;
                }))
      }, [funds]);



    const ItemView = ({item}) => {
        return (
            <CardContainer status={item.status}>
                <CardHeader>
                    <View>
                        <CardTitle>{item.name}</CardTitle>
                        <CardSubTitle>{item.type}</CardSubTitle>                      
                    </View>
                    <Badge status={item.status}>{item.statusText}</Badge>
                    
                </CardHeader>
                
                <Line />
                <ViewLine>
                    <ViewLineText>Classificação:</ViewLineText>
                    {/* The library has a bug for defaultRating equal to zero. Pull resquest was requested while lib is not available */}
                    <AirbnbRating
                        defaultRating={item.rating}
                        showRating={false}
                        size={18}
                        isDisabled={true}
                        selectedColor={item.status == 2 ? "#627179" : "#F8C22E"} 
                    />
                </ViewLine>                 
                <ViewLine>
                    <ViewLineText>Valor mínimo:</ViewLineText>
                    <Text>{item.minimumValue}</Text>
                </ViewLine>
                <ViewLine>
                    <ViewLineText>Rentabilidade:</ViewLineText>
                    <Text style={{color:formatRent(item.profitability)}}><Icon name={item.profitability > 0 ? 'arrow-down' : 'arrow-up'} size={15} color={formatRent(item.profitability)} /> {item.profitability}</Text>
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
                <HeaderTitle>Fundos</HeaderTitle>
            </Header>
            {isOffline ? <Internet />:
                <List>
                    <FlatList
                        data={funds}
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

export default Fund;