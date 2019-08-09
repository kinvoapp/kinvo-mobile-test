import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import Product from './Product'
import api from '../service/api'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';



export default class Products extends Component {
    constructor(props) {
        super(props);
        datasource = [];

        this.state = { data: '', isFetching: false, datasource, text:'' }
    }

    async componentDidMount() {
        await this.getPools();

    }


    async  getPools() {
        this.setState({ isFetching: true });
        let response
        try {
            response = await api.get(); 

        } catch (error) {
            // Tratamento do erro
        }
        dataApi = response.data.data;
        var data = [];
        dataApi.map((item) => { 
            data.push({ key: item.portfolioProductId.toString(), productTypeId: item.productTypeId, productName: item.productName, financialInstitutionName: item.financialInstitutionName, equity: this.numberToReal(item.equity), profitability: item.profitability.toFixed(2).toString().replace(".", ",") })
        })

        await this.setState({ data: data,datasource:data, isFetching: false })

    }

    onRefresh() {
        this.getPools();
    }

    searchFilterFunction = text => {
        const newData = this.state.data.filter(item => {
            const itemData = item.productName.toUpperCase();

            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });

        this.setState({ datasource: newData,text });
    };

     numberToReal(numero) {
        var numero = numero.toFixed(2).split('.');
        numero[0] =  numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F8FA' }}>
                <View style={{ margin: 8, alignItems: 'center' }}>
                    <SearchBar
                        platform={'android'}
                        containerStyle={{ backgroundColor: 'transparent', width: '95%', borderRadius: 0, elevation: 0 }}
                        inputContainerStyle={{ height: 43, borderRadius: 20, backgroundColor: "#FFFFFF" }}
                        value={this.state.text}
                        onChangeText={text => this.searchFilterFunction(text)}
                        lightTheme
                        round
                        autoCorrect={false}
                        clearIcon={false}
                        cancelIcon={<Icon name='search' color='#9DA5AC' />} 
                        searchIcon= {<Icon name='search' color='#9DA5AC' size={22}/>} 
                    />
                </View>

                <FlatList
                    ref='flatlist'
                    data={this.state.datasource}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}
                    renderItem={({ item }) => (<Product productTypeId={item.productTypeId}
                        productName={item.productName} financialInstitutionName={item.financialInstitutionName} equity={item.equity} profitability={item.profitability} />)}
                    showsVerticalScrollIndicator={false}
                />


            </View>
        )
    }
}

const styles = StyleSheet.create({})
