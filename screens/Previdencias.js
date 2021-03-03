import React from "react";
import {FlatList, ActivityIndicator, TouchableHighlight, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

export default class Previdencias extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      sort: [],
      itemPressed: [],
      myArray:[],
      error: true,
      refreshing: false,
    };
}

typeSelected(i) {
    let pressed = this.state.itemPressed;
    if(pressed.toString().includes(i) === false){
        let joined = pressed.concat(i);
            joined = joined.sort(function(a,b) {if (a < b) return -1});
        this.setState({ itemPressed: joined },function(){this.sort()})
    }
    else{
        this.setState({ itemPressed: pressed.filter(item => item !== i)},function(){this.sort()})
    }
}


sort(){
    var data = this.state.data;
    var newArray = null;
    var stringPressed = this.state.itemPressed.toString();
    if(stringPressed == '1') { const newArray = data.filter(function (el) {return el.tax == 0}); this.setState({ sort: newArray });}
    else if(stringPressed == '2') { newArray = data.filter(function (el) {return el.minimumValue == 100.00}); this.setState({ sort: newArray });}
    else if(stringPressed == '3') { newArray = data.filter(function (el) {return el.redemptionTerm == 1}); this.setState({ sort: newArray });}
    else if(stringPressed == '1,2') { newArray = data.filter(function (el) {return el.tax == 0 && el.minimumValue == 100.00}); this.setState({ sort: newArray });}
    else if(stringPressed == '1,2,3') { newArray = data.filter(function (el) {return el.tax == 1 && el.minimumValue == 100.00 && el.redemptionTerm == 0}); this.setState({ sort: newArray });}
    else if(stringPressed == '2,3') { newArray = data.filter(function (el) {return el.minimumValue == 100.00 && el.redemptionTerm == 0}); this.setState({ sort: newArray });}
    else if(stringPressed == '1,3') { newArray = data.filter(function (el) {return el.tax == 1 && el.redemptionTerm == 0}); this.setState({ sort: newArray });}
    else{ this.setState({ sort: data });}
}

componentDidMount() {
    this.makeRemoteRequest()
}

makeRemoteRequest = () => {
    this.setState({ loading: true, itemPressed:[] });
    fetch('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/pension')
      .then(res => res.json())
        .then(res => {
            this.setState({
            data: res.data,
            sort: res.data,
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
                    <Text style={styles.nomePrev}>{item.name}</Text>
                    <Text style={styles.tipoPrev}>{item.type}</Text>
                </View>
                <View style={[styles.rightCell]}>

                </View>            
            </View>

            <View style={styles.rowOption}>
                <View style={styles.leftCell}>
                    <Text style={styles.valorMinimoLabel}>Valor mínimo:</Text>
                    <Text style={styles.labelPrv}>Taxa:</Text>
                    <Text style={styles.labelPrv}>Resgate:</Text>
                    <Text style={styles.labelPrv}>Rentabilidade:</Text>
                </View>
                <View style={styles.rightCell}>
                   
                    
                    <Text style={styles.valorMinimo}>R$ {item.minimumValue.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
                    <Text style={styles.valorPrev}>{item.tax.toFixed(2).toString().replace(".", ",")}%</Text>
                    <Text style={styles.valorPrev}>D+{item.redemptionTerm}</Text>
                    <View style={styles.valorPrev}>
                        {item.profitability == 0 ? <Text style={[styles.rentZero, item.status == 2 ? styles.rentFechado : null]}>{item.profitability}%</Text> : 
                         item.profitability > 0 ? <Text style={[styles.rentUp, item.status == 2 ? styles.rentFechado : null]}>&#8593; {item.profitability}%</Text> :
                         item.profitability < 0 ? <Text style={[styles.rentDown, item.status == 2 ? styles.rentFechado : null]}>&#8595; {item.profitability}%</Text> : null              
                        }
                    </View>
                    
                </View>            
            </View>
                    
        </View>
    </View>);
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
                <View style={styles.menuTopo}> 
                <TouchableOpacity style={[styles.btnMenu, this.state.itemPressed.toString().includes(1) === true ? {backgroundColor:'#6F4DBF'} : null ]} activeOpacity={0.6} onPress={() => { this.typeSelected(1)}}>
                        <Text style={[styles.txtBtnMenu,, this.state.itemPressed.toString().includes(1) === true ? {color:'white'} : null ]}>SEM TAXA</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.btnMenu, this.state.itemPressed.toString().includes(2) === true ? {backgroundColor:'#6F4DBF'} : null ]} activeOpacity={0.6} onPress={() => { this.typeSelected(2)}}>
                        <Text style={[styles.txtBtnMenu,, this.state.itemPressed.toString().includes(2) === true ? {color:'white'} : null ]}>R$ 100,00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnMenu, this.state.itemPressed.toString().includes(3) === true ? {backgroundColor:'#6F4DBF'} : null ]} activeOpacity={0.6} onPress={() => { this.typeSelected(3)}}>
                        <Text style={[styles.txtBtnMenu,, this.state.itemPressed.toString().includes(3) === true ? {color:'white'} : null ]}>D+1</Text>
                    </TouchableOpacity>             
                </View>

            {data.length == 0 ? <View style={[styles.container, styles.nenhumResultado]}>
                                    <Text style={styles.textNenhumResultado}>Nenhum resultado foi encontrado {'\n'} para os filtros selecionados.</Text>
                                </View>
            :                
                <FlatList
                    data={data.sort(function(a,b) {if (a.name < b.name) return -1})}
                    keyExtractor={(item, index) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    renderItem={this.renderItem}  
                    ListFooterComponent={this.renderFooter}
                />

            }
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
    nenhumResultado:{
        paddingTop:25,
        alignItems: 'center',
    },
    textNenhumResultado:{
        textAlign: 'center',
        color: '#627179',
        fontSize: 12,
        fontFamily: 'montserrat-medium'
    },
    menuTopo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor:'#DAE0E3',
        borderBottomWidth: 1,
        paddingBottom:20
    },
    btnMenu:{
        marginTop:19,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        width: 93,
        height:32,
        borderRadius:93/2
    },
    txtBtnMenu:{
        fontSize: 12,
        color: '#627179',
        fontFamily: 'montserrat-bold'
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
    nomePrev:{
        color: '#627179',
        fontSize: 16,
        fontFamily: 'montserrat-bold'
    },
    tipoPrev:{
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
        fontSize: 10,
        fontFamily: 'montserrat-medium',
        color: '#627179'
    },
    rating:{
        alignItems: 'flex-end',
    },
    valorMinimo:{
        textAlign:'right',
        fontFamily: 'montserrat-semibold',
        color: '#627179',
        fontSize: 12
    },
    labelPrv:{
        marginTop:10,
        fontSize: 10,
        fontFamily: 'montserrat-medium',
        color: '#627179'
    },
    valorPrev:{
        marginTop:6,
        textAlign:'right',
        fontFamily: 'montserrat-semibold',
        color: '#627179',
        fontSize: 12
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