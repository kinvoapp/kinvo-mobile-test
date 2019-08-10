import React from "react"
import { View,  TouchableOpacity } from "react-native"
import { MaterialTopTabBar } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';



const TabBar = (props) => {
    const { navigationState, navigation, position } = props
    return (

        <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
            <TouchableOpacity style={{ flex: 15, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }} onPress={() => { }}>
                <Icon name='arrow-back' color='#9DA5AC' size={30} />
            </TouchableOpacity>
            <View style={{ flex: 85 }}>
                <MaterialTopTabBar {...props} />

            </View>
        </View>
    )
}

export default TabBar