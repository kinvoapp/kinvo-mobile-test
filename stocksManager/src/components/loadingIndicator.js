import React, { Component } from 'react';

import { StyleSheet, ActivityIndicator } from 'react-native';
import Variables from '../styles';

const LoadingIndicator = (props) => {

    return (
        <ActivityIndicator color={Variables.colors.purple} style={styles.activityIndicator} size={'large'} />
    );
}
  
export default LoadingIndicator;

const styles = StyleSheet.create({
    activityIndicator: {
        color: Variables.colors.purple,
        position: 'relative',
        top: Variables.metrics.screenHeight / 2,
        left: (Variables.metrics.screenHeight / 2) - 20,
        right: 0,
        width: 40
    }
})