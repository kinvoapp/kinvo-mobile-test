import React from "react";
import {FlatList, ActivityIndicator, TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';

export default class Fundos extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      stars: [1,2,3,4,5],
      likes: null,
      error: true,
      refreshing: false,
    };
  }

componentDidMount() {
    this.makeRemoteRequest()
}

makeRemoteRequest = () => {
    this.setState({ loading: true });
    fetch('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds')
      .then(res => res.json())
        .then(res => {
            this.setState({
            data: res.data,
            error: res.error || null,
            loading: false,
            refreshing: false
        });
      }).catch(error => {
        this.setState({ error, loading: false });
    });
};

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
    <View id={item.id} style={[styles.boxOption, item.status == 2 ? styles.bgFechado : styles.bgDefault]}>
        <View>
            <View style={styles.rowOptionHr}>
                <View style={styles.leftCell} opacity={item.status == 2 ? 0.5 : 1}>
                    <Text style={styles.nomeFundo}>{item.name}</Text>
                    <Text style={styles.tipoFundo}>{item.type}</Text>
                </View>
                <View style={[styles.rightCell]}>
                    <View>

                        <View style={styles.tagCell}>
                            {item.status == 1 ? <View style={styles.tagNovo}><Text style={styles.labelNovo}>Novo</Text></View> : null}
                            {item.status == 2 ? <View style={styles.tagFechado}><Text style={styles.labelFechado}>Fechado</Text></View> : null}
                        </View>

                    </View>
                </View>            
            </View>

            <View style={styles.rowOption}>
                <View style={styles.leftCell}>
                    <Text style={styles.classificacaoLabel}>Classificação:</Text>
                    <Text style={styles.valorMinimoLabel}>Valor mínimo:</Text>
                    <Text style={styles.rentabilidadeLabel}>Rentabilidade:</Text>
                </View>
                <View style={styles.rightCell}>
                    <View style={styles.rating}>
                        <View style={{flexDirection: 'row'}}> 
                                {this.state.stars.map((x) =>{
                                    if(item.rating<x){
                                        if(item.status == 2){return(<View key={x}><Image source={require('../assets/estrela-inativa-fechado.png')} style={{marginLeft:3}}/></View>)}
                                        else{return(<View key={x}><Image source={require('../assets/estrela-inativa.png')} style={{marginLeft:3}}/></View>)}
                                    }
                                    else{
                                        if(item.status == 2){return(<View key={x}><Image source={require('../assets/estrela-ativa-fechado.png')} style={{marginLeft:3}}/></View>)}
                                        else{return(<View key={x}><Image source={require('../assets/estrela-ativa.png')} style={{marginLeft:3}}/></View>)}
                                    }
                                })}

                        </View>
                    </View>
                    <Text style={styles.valorMinimo}>R$ {item.minimumValue.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
                    <View style={styles.rentabilidade}>
                        {item.profitability == 0 ? <Text style={[styles.rentZero, item.status == 2 ? styles.rentFechado : null]}>{item.profitability.toFixed(2).toString().replace(".", ",")}%</Text> : 
                         item.profitability > 0 ? <Text style={[styles.rentUp, item.status == 2 ? styles.rentFechado : null]}>&#8593; {item.profitability.toFixed(2).toString().replace(".", ",")}%</Text> :
                         item.profitability < 0 ? <Text style={[styles.rentDown, item.status == 2 ? styles.rentFechado : null]}>&#8595; {item.profitability.toFixed(2).toString().replace(".", ",")}%</Text> : null              
                        }
                    </View>
                    
                </View>            
            </View>
                    
        </View>
    </View>);
};  


render() {
    const data = this.state.data;
    
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
                    data={data.sort(function(a,b) {if (a.name < b.name) return -1})}
                    keyExtractor={(item, index) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
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
    bgDefault:{
        backgroundColor:'white',
    },
    bgFechado:{
        backgroundColor:'#F7F8F8',
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
    nomeFundo:{
        color: '#627179',
        fontSize: 16,
        fontFamily: 'montserrat-bold'
    },
    tipoFundo:{
        color: '#627179',
        marginTop:3,
        fontSize: 12,
        fontFamily: 'montserrat-semibold'
    },
    hr:{
        borderBottomColor: '#DAE0E3',
        borderBottomWidth: 1
    },
    tagCell:{
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tagNovo:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#36C4D6',
        padding: 10,
        width: 56,
        height:20,
        borderRadius:56/2
    },
    labelNovo:{
        fontSize: 10,
        color:'white',
        fontFamily:'montserrat-medium'
    },
    tagFechado:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#818181',
        padding: 10,
        width: 75,
        height:20,
        borderRadius:56/2
    },
    labelFechado:{
        fontSize: 10,
        color:'white',
        fontFamily:'montserrat-medium'
    },
    valorMinimoLabel:{
        marginTop:10,
        fontSize: 10,
        fontFamily: 'montserrat-medium',
        color: '#627179'
    },
    rating:{
        alignItems: 'flex-end',
    },
    valorMinimo:{
        marginTop:10,
        textAlign:'right',
        fontFamily: 'montserrat-semibold',
        color: '#627179',
        fontSize: 12
    },
    classificacaoLabel:{
        fontSize: 10,
        fontFamily: 'montserrat-medium',
        color: '#627179'
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
    rentFechado:{
        color: '#627179'
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