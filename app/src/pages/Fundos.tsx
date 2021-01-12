import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../components/FundosCard';
import axios from 'axios';
import { useLinkProps } from '@react-navigation/native';


export interface Fund {
    id: number,
    name: string,
    type: string,
    minimumValue: number,
    rating: number,
    profitability: number,
    status: number
}

export default function Fundos() {
    const [funds, setFunds] = useState<Fund[]>([]);

    const getFunds = async () => {
        try {
            const { data: funds } = await axios.get("https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds");
            setFunds(funds.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFunds();
    })

    return (


        <View style={styles.container}>
            <FlatList
                data={funds}
                renderItem={({ item }) => (
                    <Card item={item} />
                )}
                keyExtractor={(item: Fund) => item.id.toString()}
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
