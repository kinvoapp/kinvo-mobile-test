import React, { useState, useEffect } from 'react';

import { Text, Image, View, StyleSheet } from 'react-native';
import Variables from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormatToMoneyType } from '../services/utils'; 

FUNDSTYPES = [
    {status: '0', name: 'Comum'},
    {status: '1', name: 'Novo'},
    {status: '2', name: 'Fechado'},
]

const FundsCard = (props) => {
    const [fundType, setFundType] = useState(FUNDSTYPES[0]);

    useEffect(() => {
        let fundTypeFilter = FUNDSTYPES.filter(e => e.status == props.fund.status);
        if(fundTypeFilter.length > 0)
            setFundType(fundTypeFilter[0]);
      });

    return (
        <View style={fundType.name == 'Fechado' ? {...styles.card,  ...styles.closedFundCard} : styles.card}>
            <View style={styles.cardDisplayContainer}>    
                <View style={fundType.name == 'Fechado' ? {...styles.subtitleContainer, ...styles.opacityFund} : styles.subtitleContainer}>
                    <Text style={styles.title}>{props.fund.name}</Text>
                    <Text style={[styles.subtitle, styles.boldText]}>{props.fund.type}</Text>
                </View>

                {fundType.name == 'Novo' &&
                    <View style={styles.newSectionContainer}>
                        <Text style={styles.newText}>Novo</Text>
                    </View>
                }
                {fundType.name == 'Fechado' &&
                    <View style={styles.closedSectionContainer}>
                        <Text style={styles.closedText}>Fechado</Text>
                    </View>
                }
            </View>
            <View style={styles.line}></View>
            <View style={fundType.name == 'Fechado' ? [styles.cardDisplayContainer, styles.containerdistanced, styles.opacityFund] : [styles.cardDisplayContainer, styles.containerdistanced]}>    
                <Text style={styles.subtitle}>Classificação:</Text>
                <View style={styles.inlineContainer}>
                    <FontAwesomeIcon color={props.fund.rating < 1 ? Variables.colors.gray : Variables.colors.gold} style={styles.star} size={16} icon={faStar} />
                    <FontAwesomeIcon color={props.fund.rating < 2 ? Variables.colors.gray : Variables.colors.gold} style={styles.star} size={16} icon={faStar} />
                    <FontAwesomeIcon color={props.fund.rating < 3 ? Variables.colors.gray : Variables.colors.gold} style={styles.star} size={16} icon={faStar} />
                    <FontAwesomeIcon color={props.fund.rating < 4 ? Variables.colors.gray : Variables.colors.gold} style={styles.star} size={16} icon={faStar} />
                    <FontAwesomeIcon color={props.fund.rating < 5 ? Variables.colors.gray : Variables.colors.gold} style={styles.star} size={16} icon={faStar} />
                </View>
            </View>
            <View style={fundType.name == 'Fechado' ? [styles.cardDisplayContainer, styles.containerdistanced, styles.opacityFund] : [styles.cardDisplayContainer, styles.containerdistanced]}>    
                <Text style={styles.subtitle}>Valor Mínimo:</Text>
                <Text style={[styles.subtitle, styles.boldText]}>R$ {FormatToMoneyType(props.fund.minimumValue)}</Text>
            </View>
            <View style={fundType.name == 'Fechado' ? [styles.cardDisplayContainer, styles.containerdistanced, styles.opacityFund] : [styles.cardDisplayContainer, styles.containerdistanced]}>    
                <Text style={styles.subtitle}>Rentabilidade:</Text>
                <View style={styles.inlineContainer}>
                    {props.fund.profitability > 0 ?
                    <Image resizeMode='contain' source={require("../images/icons/arrowUp.png")} style={styles.arrowIcon} />
                    :
                    <Image resizeMode='contain' source={require("../images/icons/arrowDown.png")} style={styles.arrowIcon} />
                    }
                <Text style={props.fund.profitability > 0 ? styles.profitabilityUp : styles.profitabilityDown}>{props.fund.profitability}%</Text>
                </View>
            </View>
        </View>
    );
}
  
export default FundsCard;

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
    closedFundCard: {backgroundColor: Variables.colors.lightTransparent},
    opacityFund: {opacity: 0.5},
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
    newSectionContainer: {
        backgroundColor: Variables.colors.lighBlue,
        borderRadius: 20,
        width: 70,
        height: 25,
        justifyContent: 'center',
        marginLeft: 20
    },
    newText: {
        textAlign: 'center',
        fontSize: 10,
        color: Variables.colors.white
    },
    closedSectionContainer: {
        backgroundColor: Variables.colors.dark,
        borderRadius: 20,
        width: 70,
        height: 25,
        justifyContent: 'center',
        marginLeft: 20
    },
    closedText: {
        textAlign: 'center',
        fontSize: 10,
        color: Variables.colors.white
    },
    star: {
        marginHorizontal: 3
    }
})