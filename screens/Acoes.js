import React from "react";
import {FlatList, ActivityIndicator, TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Acoes extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      likes: null,
      sort: null,
      error: true,
      refreshing: false,
    };
  }

componentDidMount() {
    this.mountFav()
    this.makeRemoteRequest()
}

mountFav = () =>{
    AsyncStorage.getItem('@App:Favoritos', (err, value) => {
        if (err) {console.log(err);}
        else {
            if(JSON.parse(value) !== null){
                this.setState({likes: JSON.stringify(value)})
            }
        }
    })    
}


makeRemoteRequest = () => {
    this.setState({ loading: true });
    fetch('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks')
      .then(res => res.json())
        .then(res => {
            this.setState({
            data: res.data,
            error: res.error || null,
            loading: false,
            refreshing: false
        });
        this.sort()
      }).catch(error => {
        this.setState({ error, loading: false });
    });
};

like = (id) => {
    AsyncStorage.getItem('@App:Favoritos', (err, value) => {
        if (err) {
            console.log(err);
        }
        else {
            if(JSON.parse(value) !== null){
                var fav = JSON.parse(value);
                var index = value.indexOf(id);
                if (index > -1) {
                  fav.splice(fav.indexOf(id), 1);
                    AsyncStorage.setItem('@App:Favoritos', JSON.stringify(fav))
                    .then(() => this.setState({ likes: JSON.stringify(fav)}, () => {
                        this.sort();
                    }))
                }
                else{
                    fav.push(id);
                    AsyncStorage.setItem('@App:Favoritos', JSON.stringify(fav))
                    .then(() => this.setState({ likes: JSON.stringify(fav)}, () => {
                        this.sort();
                    }))
                }
            }
            else{
                var fav = [id];
                AsyncStorage.setItem('@App:Favoritos', JSON.stringify(fav))
                .then(() => this.setState({ likes: JSON.stringify(fav)}, () => {
                    this.sort();
                }))
            }
        }
    })
}

sort = () => {
    var tempArrayFav = new Array();
    var tempArrayUnFav = new Array();
    if(this.state.likes){
    var likes = JSON.parse(this.state.likes);
    this.state.data.map(function(item) {
        var index = likes.indexOf(item.id)
        if (index > -1) {
            let itens = {
                id: item.id,
                name: item.name,
                ticker: item.ticker,
                minimumValue: item.minimumValue,
                profitability: item.profitability
              };
              tempArrayFav.push(itens);
        }
        else{
            let itens = {
                id: item.id,
                name: item.name,
                ticker: item.ticker,
                minimumValue: item.minimumValue,
                profitability: item.profitability
              };
            tempArrayUnFav.push(itens);
        }
    })
        tempArrayFav.sort(function(a,b) {if (a.name < b.name) return -1})
        tempArrayUnFav.sort(function(a,b) {if (a.name < b.name) return -1})
        var arr = tempArrayFav.concat(tempArrayUnFav)
        this.setState({ sort: arr})
    }
    else{
        this.setState({ sort: this.state.data.sort(function(a,b) {if (a.name < b.name) return -1})})
    }
}

handleRefresh = () => {
this.setState({refreshing: true},() => {
    this.makeRemoteRequest();
    });
};

renderFooter = () =>{
    return(
        <View style={{marginBottom:20}}></View>
    )
}

renderItem = ({ item }) => {    
return (
    <TouchableHighlight style={styles.boxOption} activeOpacity={0.6}>
        <View>
            <View style={styles.rowOptionHr}>
                <View style={styles.leftCell}>
                    <Text style={styles.nomeAtivo}>{item.name}</Text>
                    <Text style={styles.codigoAtivo}>{item.ticker}</Text>
                </View>
                <View style={styles.rightCell}>
                    <TouchableOpacity onPress={() => this.like(item.id)} activeOpacity={0.6} style={{alignItems:'flex-end'}}>
                        <Image source={this.state.likes == null ? require('../assets/btn-unfav.png') : this.state.likes.indexOf(item.id) > -1 ? require('../assets/btn-fav.png') : require('../assets/btn-unfav.png')} />
                    </TouchableOpacity>
                </View>            
            </View>

            <View style={styles.rowOption}>
                <View style={styles.leftCell}>
                    <Text style={styles.valorMinimoLabel}>Valor mínimo:</Text>
                    <Text style={styles.rentabilidadeLabel}>Rentabilidade:</Text>
                </View>
                <View style={styles.rightCell}>
                    <Text style={styles.valorMinimo}>R$ {item.minimumValue.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
                    <View style={styles.rentabilidade}>
                        {item.profitability == 0 ? <Text style={styles.rentZero}>{item.profitability.toFixed(2).toString().replace(".", ",")}%</Text> : 
                         item.profitability > 0 ? <Text style={styles.rentUp}>&#8593; {item.profitability.toFixed(2).toString().replace(".", ",")}%</Text> :
                         item.profitability < 0 ? <Text style={styles.rentDown}>&#8595; {item.profitability.toFixed(2).toString().replace(".", ",")}%</Text> : null              
                        }
                    </View>
                </View>            
            </View>
                    
        </View>
    </TouchableHighlight>);
};  


render() {
    const data = this.state.sort;
    
    if (this.state.loading){
        return(
        <View style={[styles.container, {justifyContent: "center"}]}>
            <ActivityIndicator size="large" color="#6F4DBF" style={41} />
        </View>
        )
    }
    else if (this.state.error){
        return(
        <View style={[styles.container, {alignItems: 'center', justifyContent: "center"}]}>
            <Text style={styles.tituloErro}>Ocorreu um erro.</Text>
            <Text style={styles.subTituloErro}>Não foi possível se conectar ao banco de fundos.</Text>
            <TouchableHighlight style={styles.btnTentarNovamente} activeOpacity={0.6} onPress={() => this.handleRefresh()}>
                <Text style={styles.tentarNovamente}>TENTAR NOVAMENTE</Text>
            </TouchableHighlight>
        </View>        
        )
    }
    else{
    return (
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={5}
                    removeClippedSubviews={true} 
                    data={data}
                    extraData={this.state.sort}
                    keyExtractor={item => item.id.toString()}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    renderItem={this.renderItem}
                    ListFooterComponent={this.renderFooter}
                />
            </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF0F2',
        paddingLeft: 20,
        paddingRight:20,
        flex: 1
    },
    boxOption: {
        marginTop:20,
        width: '100%',
        borderColor: '#DAE0E3',
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft:18,
        paddingRight:17,
        paddingTop:16,
        backgroundColor: 'white',
        height: 'auto',
        paddingBottom:15
    },
    rowOptionHr:{
        flexDirection: 'row',
        borderBottomColor:'#DAE0E3',
        borderBottomWidth: 1,
        paddingBottom:15
    },
    rowOption:{
        marginTop:10,
        flexDirection: 'row'
    },
    leftCell:{
        width: '70%'
    },
    rightCell:{
        width: '30%'
    },
    nomeAtivo:{
        color: '#627179',
        fontSize: 16,
        fontFamily: 'montserrat-bold'
    },
    codigoAtivo:{
        color: '#627179',
        marginTop:3,
        fontSize: 12,
        fontFamily: 'montserrat-semibold'
    },
    hr:{
        borderBottomColor: '#DAE0E3',
        borderBottomWidth: 1
    },
    valorMinimoLabel:{
        fontSize: 10,
        fontFamily: 'montserrat-medium',
        color: '#627179'
    },
    valorMinimo:{
        textAlign:'right',
        fontFamily: 'montserrat-semibold',
        color: '#627179',
        fontSize: 12

    },
    rentabilidadeLabel:{
        marginTop:10,
        fontSize: 10,
        fontFamily: 'montserrat-medium',
        color: '#627179'
    },
    rentabilidade:{
        marginTop:7
    },
    rentDown:{
        textAlign:'right',
        fontFamily: 'montserrat-semibold',
        fontSize: 12,
        color: '#E85D1F',
    },
    rentUp:{
        textAlign:'right',
        fontFamily: 'montserrat-semibold',
        fontSize: 12,
        color: '#AED335'
    },
    rentZero:{
        textAlign:'right',
        fontFamily: 'montserrat-semibold',
        fontSize: 12,
        color: '#627179'
    },
    tituloErro:{
        marginTop:12,
        fontFamily:'montserrat-bold',
        color: '#627179',
        fontSize: 16
    },
    subTituloErro:{
        fontFamily:'montserrat-medium',
        color: '#627179',
        fontSize: 12
    },
    btnTentarNovamente:{
        marginTop:19,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6F4DBF',
        padding: 10,
        width: 179,
        height:32,
        borderRadius:179/2
    },
    tentarNovamente:{
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: 'montserrat-bold'
    }
})