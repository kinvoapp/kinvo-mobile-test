import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Card from '../components/HomeCards';

export default function Home(props: { navigation: any }) {

    const data = [
        { id: "1", icon: require("../../assets/acoes.svg"), title: 'Ações', subtitle: 'Nacionais', isNew: false },
        { id: "2", icon: require("../../assets/fundos.svg"), title: 'Fundos', subtitle: 'De investimentos', isNew: true, navigateTo: 'Fundos' },
        { id: "3", icon: require("../../assets/previdencias.svg"), title: 'Previdências', subtitle: 'Privadas', isNew: false }]

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Card navigation={props.navigation} icon={item.icon} title={item.title} subtitle={item.subtitle} isNew={item.isNew} navigateTo={item.navigateTo} />)}
                keyExtractor={(item: { id: string, icon: string, title: string, subtitle: string, isNew: boolean, navigateTo?: string }) => item.id}
                style={styles.listContainer}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF0F2'
    },
    listContainer: {
        padding: 20,
    }
});