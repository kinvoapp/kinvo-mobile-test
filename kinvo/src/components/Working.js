import React, { Component } from 'react'
import { Text,  View,ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Working extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:15}}>
                <Text style={{color:'#0DD1E2',fontSize:25,fontWeight:'bold'}}> Manutenção </Text>
                <Icon name='worker' color='#0DD1E2' size={50} />
                <ActivityIndicator/>
            </View>
        )
    }
}

