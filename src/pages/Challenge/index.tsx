import React, {useCallback, useState, useEffect} from 'react';
import {
    FlatList,
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';  
import { 
    Container, 
    Header, 
    HeaderTitle, 
    Menu, 
    MenuContainer, 
    MenuIcon,
    MenuInfo,
    MenuSubInfo,
    Badge,
    MenuMeta
  } from './styles';
import Internet from '../../components/Internet';
import NetInfo from "@react-native-community/netinfo";

const menuArray = [
    {id: '1', info: 'Ações', subinfo: 'Nacionais', new: false, link: 'Stock', src:require('../../assets/stock.png')},
    {id: '2', info: 'Fundos', subinfo: 'De investimentos', new: true, link: 'Fund', src:require('../../assets/shape.png')},
    {id: '3', info: 'Previdências', subinfo: 'Privadas', new: false, link: 'Pension', src:require('../../assets/pension.png')},
  ];

const Challenge: React.FC = () => {
    const [listItems, setListItems] = useState(menuArray);
    const { navigate } = useNavigation();

    const [isOffline, setOfflineStatus] = useState(false);
  
    useEffect(() => {
      const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
        const offline = !(state.isConnected && state.isInternetReachable);
        setOfflineStatus(offline);
      });

      return () => removeNetInfoSubscription();
    }, []);

    const navigateToMenuItem = useCallback(
        (link: string) => {
            navigate(link)
        },
        [navigate]
    );

    const ItemView = ({item}) => {
        return (
            <MenuContainer 
                onPress={() => navigateToMenuItem(item.link)}
            >
                <MenuIcon source={item.src} />
                <MenuMeta>
                    <MenuInfo>{item.info}</MenuInfo>
                    <MenuSubInfo>{item.subinfo}</MenuSubInfo>
                </MenuMeta>
                <Badge new={item.new}>{item.new ? 'Novo' : null}</Badge>
            </MenuContainer>
        );
      };


    return (
        <Container>
            <Header>
                <HeaderTitle>Desafio</HeaderTitle>
            </Header>
            {isOffline ? <Internet />:
                <Menu>
                    <FlatList
                        data={listItems}
                        renderItem={ItemView}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </Menu>
            }
        </Container>

    );

}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 30,
    }
  });

export default Challenge;