import React, {useState, useEffect} from 'react';
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
    Badge,
    FilterView,
    FilterFlatList
  } from './styles';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import Load from '../../components/Load';
import FilterButton from '../../components/FilterButton';
import orderAlpha from '../../utils/orderAlpha';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
import Internet from '../../components/Internet';
import NetInfo from "@react-native-community/netinfo";
import formatValue from '../../utils/formatValue';
import formatRent from '../../utils/formatRent';

export interface PensionInterface {
    id: number;
    name: string;
    type: string;
    minimumValue: number;
    tax: number;
    redemptionTerm: number; 
    profitability: boolean;
}

export interface Service {
    sucess: boolean;
    data: PensionInterface[];
    error: string;
}

const filterArray = [
    {key: 1, title: 'SEM TAXA', query: 'item.tax == 0.0'},
    {key: 2, title: 'R$100,00', query: 'pension.minimumValue == 100'},
    {key: 3, title: 'D+1', query: 'pension.redemptionTerm == 1'},
  ];

const Pension: React.FC = () => {
    const [listItems, setListItems] = useState(filterArray); 
    // const [pensionsSelected,setPensionsSelected] = useState(0);
    const [filterSelected, setFilterSelected] = useState<number[]>([]);    
    const [filteredPensions,setFilteredPensions] = useState<PensionInterface[]>([]);
    const [pensions, setPensions] = useState<PensionInterface[]>([]);
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
        async function loadPensions(): Promise<void> {
            const response = await api.get<Service[]>(`pension`);
            const formattedData = response.data.data.map(object => ({
                ...object,
            }));
            setPensions(
                orderAlpha(formattedData)
            )
            setFilteredPensions(formattedData);
            setRefreshing(false);
            setLoading(false);
        }
        loadPensions();
    }, [refreshing]);

    function handleFilterSelected(filter: number) {
        const alreadySelected = filterSelected.includes(filter);
        if (alreadySelected) {
            setFilterSelected([
                ...filterSelected.filter((idFiltered) => idFiltered !== filter),
            ]);
        } else {
            setFilterSelected([...filterSelected,filter]);
        }
    }
    // todo: refactoring 'ifs' can be suppressed. this was a solution without time
    useEffect(() => { 
        if(filterSelected.length == 0){             
            setFilteredPensions([...pensions]);
        }       
        if(filterSelected.includes(1) && filterSelected.length == 1){
            const filtered = pensions.filter(pension => pension.tax == 0.0);              
            setFilteredPensions([...filtered]);
        }
        if(filterSelected.includes(1) && filterSelected.includes(2) && filterSelected.length == 2){
            const filtered = pensions.filter(pension => pension.tax == 0.0 && pension.minimumValue == 100);               
            setFilteredPensions([...filtered]);
        }
        if(filterSelected.includes(1) && filterSelected.includes(3) && filterSelected.length == 2){               
            const filtered = pensions.filter(pension => pension.tax == 0.0 && pension.redemptionTerm == 1);
            setFilteredPensions([...filtered]);
        }            
        if(filterSelected.includes(1) && filterSelected.includes(2) && filterSelected.includes(3)){
            const filtered = pensions.filter(pension => pension.tax === 0.0 && pension.minimumValue === 100 && pension.redemptionTerm === 1);               
            setFilteredPensions([...filtered]);
        }                              
        if(filterSelected.includes(2) && filterSelected.length == 1){               
            const filtered = pensions.filter(pension => pension.minimumValue == 100);
            setFilteredPensions([...filtered]);
        }   
        if(filterSelected.includes(2) && filterSelected.includes(3) && filterSelected.length == 2){               
            const filtered = pensions.filter(pension => pension.minimumValue == 100);
            setFilteredPensions([...filtered]);
        }                                 
        if(filterSelected.includes(3) && filterSelected.length == 1){                
            const filtered = pensions.filter(pension => pension.redemptionTerm == 1);
            setFilteredPensions([...filtered]);
        } 
    }, [filterSelected]);

    const ItemView = ({item}) => {
        return (
            <CardContainer status={item.status}>
                <CardHeader>
                    <View>
                        <CardTitle>{item.name}-{filterSelected}</CardTitle>
                        <CardSubTitle>{item.type}</CardSubTitle>                      
                    </View>
                    <Badge status={item.status}>{item.statusText}</Badge>
                    
                </CardHeader>
                
                <Line />
                <ViewLine>
                    <ViewLineText>Valor mínimo:</ViewLineText>
                    <Text style={{color:"#627179"}}>{formatValue(item.minimumValue)}</Text>
                </ViewLine>                 
                <ViewLine>
                    <ViewLineText>Taxa:</ViewLineText>
                    <Text style={{color:"#627179"}}>{item.tax}%</Text>
                </ViewLine>
                <ViewLine>
                    <ViewLineText>Resgate:</ViewLineText>
                    <Text style={{color:"#627179"}}>D+ {item.redemptionTerm}</Text>
                </ViewLine>   
                <ViewLine>
                    <ViewLineText>Rentabilidade:</ViewLineText>
                    <Text style={{color:formatRent(item.profitability)}}><Icon name={item.profitability > 0 ? 'arrow-down' : 'arrow-up'} size={15} color={formatRent(item.profitability)} />{item.profitability}%</Text>
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

                <HeaderTitle>Previdências</HeaderTitle>
            </Header>
            <FilterView>
                <FilterFlatList 
                    data={listItems}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({ item }) => (
                        <FilterButton 
                            title={item.title}
                            active={filterSelected.includes(item.key)}
                            onPress={() => handleFilterSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    loop={false}
                />
            </FilterView>
            <Line />
            {isOffline ? <Internet />:            
                <List>
                    <FlatList
                        data={filteredPensions}
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
                            <Text style={{color:'#627179', fontSize:18, textAlign:'center', paddingTop:30}}>Nenhum resultado foi encontrado para os filtros selecionados.</Text>
                        }
                    />
                </List>
            }
        </Container>
    );
}

export default Pension;