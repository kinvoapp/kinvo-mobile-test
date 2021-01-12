import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function HomeCards(props: { navigation: any, icon: any, title: string, subtitle: string, isNew: boolean, navigateTo?: string }) {
    return (
            <TouchableOpacity style={styles.container} onPress={() => props.navigateTo ? props.navigation.navigate(props.navigateTo) : null}>
                <View style={styles.coreContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={props.icon} style={styles.stretch}/>
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.subTitle}>{props.subtitle}</Text>
                    </View>
                </View>
                {props.isNew ? 
                <View style={styles.new}>
                    <Text style={styles.newText}>Novo</Text>
                </View> : null}
            </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 130,
        marginVertical: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        marginLeft: 20
    },
    title: {
        color: '#6F4DBF',
        fontSize: 16,
        fontFamily: 'MontserratMedium',
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#627179',
        fontSize: 12,
        fontWeight: "600"
    },
    imageContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#ECF0F2',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    coreContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center"
    },
    new: {
        marginRight: 10,
        width: 68,
        height: 23,
        backgroundColor: '#40C5D6',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'

    },
    newText: {
        color:'white',
        fontWeight:'bold',
        fontSize: 12 
    },
    stretch: {
        width: '89%',
        height: '70%',
    }
});

