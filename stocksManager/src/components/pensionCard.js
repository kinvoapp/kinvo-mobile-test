import React, { useState, useEffect } from 'react';

import { Text, Image, View, StyleSheet } from 'react-native';
import Variables from '../styles';
import { FormatToMoneyType } from '../services/utils'; 


const PensionCard = (props) => {

    return (
        <View style={styles.card}>
            <View style={styles.cardDisplayContainer}>    
                <View style={styles.subtitleContainer}>
                    <Text style={styles.title}>{props.pension.name}</Text>
                    <Text style={[styles.subtitle, styles.boldText]}>{props.pension.type}</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={[styles.cardDisplayContainer, styles.containerdistanced]}>    
                <Text style={styles.subtitle}>Valor Mínimo:</Text>
                <Text style={[styles.subtitle, styles.boldText]}>R$ {FormatToMoneyType(props.pension.minimumValue)}</Text>
            </View>
            <View style={[styles.cardDisplayContainer, styles.containerdistanced]}>    
                <Text style={styles.subtitle}>Resgate:</Text>
                <Text style={[styles.subtitle, styles.boldText]}>D+{props.pension.redemptionTerm}</Text>
            </View>
            <View style={[styles.cardDisplayContainer, styles.containerdistanced]}>    
                <Text style={styles.subtitle}>Taxa:</Text>
                <Text style={[styles.subtitle, styles.boldText]}>{FormatToMoneyType(props.pension.tax)}%</Text>
            </View>
            <View style={[styles.cardDisplayContainer, styles.containerdistanced]}>    
                <Text style={styles.subtitle}>Rentabilidade:</Text>
                <View style={styles.inlineContainer}>
                    {props.pension.profitability > 0 ?
                    <Image resizeMode='contain' source={require("../images/icons/arrowUp.png")} style={styles.arrowIcon} />
                    :
                    <Image resizeMode='contain' source={require("../images/icons/arrowDown.png")} style={styles.arrowIcon} />
                    }
                <Text style={props.pension.profitability > 0 ? styles.profitabilityUp : styles.profitabilityDown}>{props.pension.profitability}%</Text>
                </View>
            </View>
        </View>
    );
}
  
export default PensionCard;

const styles = StyleSheet.create({
    card:{
        marginVertical: 10,
        marginHorizontal: 25,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: Variables.colors.white,
        borderWidth: 1,
        borderColor: Variables.colors.gray
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