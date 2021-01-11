import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { Ionicons} from '@expo/vector-icons';


export default function Fundos(props){
return(

<TouchableOpacity onPress={(props.onPress) } style={styles.A}>
    <Image
    source={props.cover}
    style={styles.B}

    />



</TouchableOpacity>

);
}


const style = StyleSheet.create({
    B: {
        alignItems:'center',
        },
    })
