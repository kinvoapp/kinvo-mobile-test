import React from "react";
import { SafeAreaView, TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';

export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
        <SafeAreaView style={styles.containerHome}>
                
            <TouchableHighlight style={styles.boxOptionHome} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => navigate('Acoes')}>
                <View style={styles.rowOptionHome}>
                    <View style={styles.leftCell}>
                        <View style={styles.imgCircle}>
                            <Image source={require('../assets/btn-acoes.png')}/>
                        </View>
                    </View>
                    
                    <View style={styles.rightCell}>
                        <Text style={styles.titPurple}>Ações</Text>
                        <Text style={styles.subTitGray}>Nacionais</Text>
                    </View>
                </View>
            </TouchableHighlight>


            <TouchableHighlight style={styles.boxOptionHome} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => navigate('Fundos')}>
                <View style={styles.rowOptionHome}>
                    <View style={styles.leftCell}>
                        <View style={styles.imgCircle}>
                            <Image source={require('../assets/btn-fundos.png')}/>
                        </View>
                    </View>
                    
                    <View style={[styles.rightCell, {flexDirection: 'row'}]}>
                        <View>
                            <Text style={styles.titPurple}>Fundos</Text>
                            <Text style={styles.subTitGray}>De investimentos</Text>
                        </View>
                    </View>
                    <View style={styles.tagCell}>
                        <View style={styles.tagNovo}>
                            <Text style={styles.labelNovo}>Novo</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>


            <TouchableHighlight style={styles.boxOptionHome} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => navigate('Previdencias')}>
                <View style={styles.rowOptionHome}>
                    <View style={styles.leftCell}>
                        <View style={styles.imgCircle}>
                            <Image source={require('../assets/btn-previdencias.png')}/>
                        </View>
                    </View>
                    
                    <View style={styles.rightCell}>
                        <Text style={styles.titPurple}>Previdências</Text>
                        <Text style={styles.subTitGray}>Privadas</Text>
                    </View>
                </View>
            </TouchableHighlight>
            

        </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    containerHome: {
        backgroundColor: '#ECF0F2',
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    boxOptionHome: {
        marginBottom:20,
        width: '100%',
        borderColor: '#DAE0E3',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'white',
        height: 120,
    },
    rowOptionHome: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    imgCircle:{
        width:56,
        height:56,
        backgroundColor: '#ECF0F2',
        borderRadius:56/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftCell:{
        width: 56,
        height: 56,
        paddingLeft:20
    },
    rightCell:{
        paddingLeft:35,
        height: 56,
    },
    titPurple:{
        marginTop:8,
        color: '#6F4DBF',
        fontSize: 16,
        fontFamily: 'montserrat-bold'
    },
    subTitGray:{
        color: '#627179',
        fontSize: 10,
        fontFamily: 'montserrat-semibold'
    },
    tagCell:{
        position: 'absolute',
        right: 0,
        marginRight:20,
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
    }
})