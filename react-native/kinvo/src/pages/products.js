import React from 'react';
import api from '../services/api';
import Toast from 'react-native-whc-toast';
import _ from 'lodash';
import { colors } from './productColor';
import { contains } from './productFilter';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';

export class ProductsScreen extends React.Component {
    static navigationOptions = {
        title: 'Produtos',
        headerStyle: {
            backgroundColor: '#FFFFFF'
        },
        headerTintColor: '#363636'
    };

    state = {
        data: [],
        fullData: [],
        search: '',
        loading: true
    };

    componentDidMount() {
        this.getProducts();
    }

    getProducts = async () => {
        const response = await api.get('/getProducts');
        const { data } = response.data;

        this.setState({
            data,
            fullData: data,
            loading: false
        });
    };

    updateSearch = (text) => {
        const formatText = text.toLowerCase()
        const data = _.filter(this.state.fullData, product => {
            return contains(product, formatText);
        });

        this.setState({
            search: formatText,
            data
        });
    };

    renderItem = ({ item }) => (
        <View style={style.productContainer}>
            <View style={style.productSubContainer}>

                <Text style={{ color: colors(item.productTypeId), fontSize: 10 }}>
                    {item.financialInstitutionName}
                </Text>

                <View style={style.productNameContainer}>
                    <View style={{ backgroundColor: colors(item.productTypeId), width: 5, height: 30, borderRadius: 10 }}></View>
                    <Text style={style.textProduct}>
                        {item.productName}
                    </Text>
                </View>

                <View style={style.containerFlexRow}>
                    <Text style={style.textNameSaldo}>
                        SALDO ATUAL
                    </Text>
                    <Text style={style.textNameRent}>
                        RENTABILIDADE
                    </Text>
                </View>

                <View style={style.containerFlexRow}>
                    <Text style={{ color: colors(item.productTypeId), fontSize: 22, width: '50%' }}>
                        R${item.equity.toLocaleString('pt-BR')}
                    </Text>
                    <Text style={{ color: colors(item.productTypeId), fontSize: 20, width: '50%', textAlign: 'right' }}>
                        {item.profitability.toLocaleString('pt-BR')}%
                    </Text>
                </View>

            </View>
        </View>
    );


    render() {
        return (
            <View style={style.container}>
                <Toast ref="toast" />

                <View style={style.searchSection}>
                    <Image
                        source={require('../images/search.png')}
                        style={style.imageSearch}
                    />
                    <TextInput
                        style={style.searchBar}
                        onChangeText={this.updateSearch}
                    />
                </View>

                {this.state.loading && (
                    <ActivityIndicator
                        color='#4F279A'
                        size='large'
                    />
                )}

                <FlatList
                    data={this.state.data}
                    keyExtractor={item => '' + item.portfolioProductId}
                    renderItem={this.renderItem}
                />

                <View style={style.viewButtons}>
                    <TouchableOpacity style={style.buttons} onPress={() => {
                        this.refs.toast.show('Action Resumo not implemented');}}>
                        <Image
                            source={require('../images/resumo.png')}
                            style={style.imageIconButton}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={style.buttons} onPress={() => {
                        this.refs.toast.show('Action Carteira not implemented');}}>
                        <Image
                            source={require('../images/carteira.png')}
                            style={style.imageIconButton}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={style.buttons} onPress={() => {
                        this.refs.toast.show('Action Add not implemented');}}>
                        <Image
                            source={require('../images/add.png')}
                            style={style.imageIconButton}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={style.buttons} onPress={() => {
                        this.refs.toast.show('Action Premium not implemented');}}>
                        <Image
                            source={require('../images/premium.png')}
                            style={style.imageIconButton}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={style.buttons} onPress={() => {
                        this.refs.toast.show('Action Conta not implemented');}}>
                        <Image
                            source={require('../images/conta.png')}
                            style={style.imageIconButton}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({

    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 30,
        borderRadius: 15,
        margin: 20,
      },
    
      imageSearch: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
    
      searchBar: {
        flex: 1,
        height: 30,
      },
    
      viewButtons: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dcdcdc',
        height: '12%'
      },
    
      buttons: {
        padding: 5,
        width: '20%',
        alignItems: 'center',
      },
    
      imageIconButton: {
        resizeMode: 'contain'
      },
      container: {
        flex: 1,
        backgroundColor: '#fafafa'
      },
    
      productContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD'
      },
    
      productSubContainer: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 10
      },
    
      productNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5
      },
    
      textProduct: {
        paddingLeft: 5,
        color: '#363636',
        fontWeight: 'bold'
      },
    
      containerFlexRow: {
        flexDirection: 'row'
      },
    
      textNameSaldo: {
        fontSize: 10,
        color: '#696969',
        width: '50%'
      },
    
      textNameRent: {
        fontSize: 10,
        color: '#696969',
        width: '50%',
        textAlign: 'right'
      }
    
});