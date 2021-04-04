import React, { Component } from 'react';

import { Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Variables from '../styles';

import { TransformToMoney } from '../services/utils'; 

const Stockcard = (props) => {
    
    setLikedStock = (id) => {
        props.setLikedStock(id)
    } 

    return (
        <View style={styles.card}>
            <View style={styles.cardDisplayContainer}>    
                <View style={styles.subtitleContainer}>
                    <Text style={styles.title}>{props.stock.name}</Text>
                    <Text style={[styles.subtitle, styles.boldText]}>{props.stock.ticker}</Text>
                </View>

                <TouchableOpacity onPress={() => setLikedStock(props.stock.id)} style={styles.likeContainer}>
                    {props.stock.isFavorite ?        
                        <Image resizeMode='contain' source={require("../images/icons/filledHeart.png")} style={styles.likeIcon} />
                        :                
                        <Image resizeMode='contain' source={require("../images/icons/emptyHeart.png")} style={styles.likeIcon} />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
            <View style={[styles.cardDisplayContainer, styles.containerdistanced]}>    
                <Text style={styles.subtitle}>Valor Mínimo:</Text>
                <Text style={[styles.subtitle, styles.boldText]}>R$ {TransformToMoney(props.stock.minimumValue)}</Text>
            </View>
            <View style={[styles.cardDisplayContainer, styles.containerdistanced]}>    
                <Text style={styles.subtitle}>Rentabilidade:</Text>
                <View style={styles.inlineContainer}>
                    {props.stock.profitability > 0 ?
                    <Image resizeMode='contain' source={require("../images/icons/arrowUp.png")} style={styles.arrowIcon} />
                    :
                    <Image resizeMode='contain' source={require("../images/icons/arrowDown.png")} style={styles.arrowIcon} />
                    }
                <Text style={props.stock.profitability > 0 ? styles.profitabilityUp : styles.profitabilityDown}>{props.stock.profitability}%</Text>
                </View>
            </View>
        </View>
    );
}
  
export default Stockcard;

const styles = StyleSheet.create({
    card:{
        marginTop: 20,
        marginHorizontal: 25,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: Variables.colors.white,
        borderWidth: 1,
        borderColor: Variables.colors.gray
    },
    hour: {
        color: Variables.colors.brown,
        fontSize: 10,
        fontWeight: '800'
    },
    cardDisplayContainer:{
        flexDirection: "row",
        marginHorizontal: 12,
    },
    inlineContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    containerdistanced: {marginTop: 15, justifyContent: 'space-between'},
    likeContainer: {
        padding: 5,
    },
    likeIcon: {width: 20, height: 20},
    arrowIcon: {width: 10, height: 10},
    title: {
        color: Variables.colors.dark,
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle:{
        color: Variables.colors.dark,
        fontSize: 12,
    },
    boldText:{fontWeight: 'bold'},
    subtitleContainer: {
        flex: 1
    },
    line:{
        backgroundColor: Variables.colors.gray,
        height: 1,
        flex:1,
        marginTop: 15,
        marginHorizontal: 10
    },
    profitabilityUp: {
        color: Variables.colors.success,
        fontSize: 12,
        marginLeft: 5
    },
    profitabilityDown: {
        color: Variables.colors.danger,
        fontSize: 12,
        marginLeft: 5
    },
})