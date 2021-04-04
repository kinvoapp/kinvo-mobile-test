import React, { Component } from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import NavigationService from '../services/navigationService';
import Variables from '../styles';

const ApiError = (props) => {

    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Ocorreu um erro.</Text>
        <Text style={styles.errorBody}>Não foi possível se conectar ao banco de fundos.</Text>
        <TouchableOpacity onPress={() => props.setApiCall()} style={styles.errorTryAgain}>
          <Text style={styles.errorTryAgainText}>TENTAR NOVAMENTE</Text>
        </TouchableOpacity>
      </View>
    );
}
  
export default ApiError;

const styles = StyleSheet.create({
    
    errorContainer:{
        marginTop: 150,
    },
    errorTitle: {
        fontSize: 16,
        color: Variables.colors.dark,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    errorBody: {
        fontSize: 12,
        marginTop: 5,
        marginHorizontal: 90,
        color: Variables.colors.dark,
        textAlign: 'center',
    },
    errorTryAgain: {
        backgroundColor: Variables.colors.purple,
        paddingVertical: 5,
        marginTop: 10,
        paddingHorizontal: 15,
        width: 200,
        borderRadius: 50,
        alignSelf: 'center'
    },
    errorTryAgainText: {
        color: Variables.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})