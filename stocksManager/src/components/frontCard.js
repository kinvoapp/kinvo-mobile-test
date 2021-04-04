import React, { Component } from 'react';

import { Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import NavigationService from '../services/navigationService';
import Variables from '../styles';

const FrontCard = (props) => {
    
    openSection = (category) => {
        NavigationService.navigate(category);
    } 

    return (
        <TouchableOpacity onPress={() => this.openSection(props.category.route)} style={styles.card}>
            <View style={styles.cardDisplayContainer}>
                <View style={styles.iconContainer}>
                    <Image resizeMode='contain' source={props.category.imageUrl} style={styles.icon} />                
                </View>    

                <View style={styles.subtitleContainer}>
                    <Text style={styles.title}>{props.category.title}</Text>
                    <Text style={styles.subtitle}>{props.category.subtitle}</Text>
                </View>

                {props.category.new &&
                    <View style={styles.newSectionContainer}>
                        <Text style={styles.newText}>Novo</Text>
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
}
  
export default FrontCard;

const styles = StyleSheet.create({
    card:{
        marginTop: 10,
        marginHorizontal: 25,
        paddingVertical: 32,
        paddingHorizontal: 20,
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
        alignItems: 'center',
    },
    iconContainer: {
        borderRadius: 30,
        backgroundColor: Variables.colors.primary,
        padding: 10
    },
    icon: {
        width: 25,
        height: 25,
    },
    newSectionContainer: {
        backgroundColor: Variables.colors.lighBlue,
        padding: 5,
        borderRadius: 20,
        width: 70
    },
    title: {
        color: Variables.colors.purple,
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle:{
        color: Variables.colors.dark,
        fontSize: 10,
        fontWeight: 'bold',
    },
    subtitleContainer: {
        marginLeft: 12,
        flex: 1
    },
    newText: {
        textAlign: 'center',
        fontSize: 10,
        color: Variables.colors.white
    },
})