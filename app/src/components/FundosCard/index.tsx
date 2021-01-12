import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, StatusBarIOS } from 'react-native';
import { startClock } from 'react-native-reanimated';
import { Fund } from '../../pages/Fundos';

const Ratings = (props: { rating: number }) => {
    const maxRating = [1, 2, 3, 4, 5];
    const [rating, setRating] = useState(0);

    useEffect(() => {

        setRating(props.rating);
    }, [])

    return <View style={styles.row}>
        {
            maxRating.map((item, idx) => {
                const stars = <Image source={require(props.rating > 0 ? "../../../assets/star-black-24dp.png" : "../../../assets/star_border-black-24dp.png")} style={styles.profitIcons}></Image>;
                return stars;
            })
        }
    </View>

}

export default function FundosCards(props: { item: Fund }) {
    const { item } = props;

    return (
        <View style={[styles.container, { opacity: item.status == 2 ? 0.4 : 1 }]}>
            <View style={styles.coreContainer}>
                <View style={styles.text}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.subTitle}>{item.type}</Text>
                </View>
                {item.status !== 0 ?
                    <View style={[styles.new, { backgroundColor: item.status == 2 ? '#818181' : '#40C5D6' }]}>
                        <Text style={styles.newText}>{item.status == 2 ? "Fechado" : "Novo"}</Text>
                    </View> : null}
            </View>
            <View style={styles.secondContainer}>
                <View style={styles.row}>
                    <Text>Classificação:</Text>
                    <View style={styles.ratingRow}>
                        <Ratings rating={item.rating} />
                    </View>

                </View>

                <View style={styles.row}>
                    <Text>Valor mínimo:</Text>
                    <Text style={styles.minimumValueRow}>R${item.minimumValue}</Text>
                </View>
                <View style={styles.row}>
                    <Text>Rentabilidade:</Text>
                    <View style={styles.profitView}>
                        <Image style={styles.profitIcons} source={require(item.profitability > 0 ? '../../../assets/icon-livre-up.png' : '../../../assets/icon-livre-down.png')} />
                        <Text style={[{ color: item.profitability > 0 ? "#AED335" : "#E85D1F" }]}>{item.profitability}%</Text>
                    </View>

                </View>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        marginVertical: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    text: {
        marginLeft: 10,
        maxWidth: '60%'
    },
    title: {
        color: '#627179',
        fontSize: 14,
        fontFamily: 'MontserratMedium',
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#627179',
        fontSize: 12,
        fontWeight: "600",
        textTransform: 'uppercase'
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
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 20
    },
    secondContainer: {
        flex: 1,
        borderTopColor: "#DAE0E3",
        borderTopWidth: 1,
        padding: 10
    },
    classificacaoRow: {

    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    ratingRow: {

    },
    minimumValueRow: {
        fontFamily: 'Montserrat',
        color: '#627179',
        fontWeight: 'bold'
    },
    rentRow: {

    },
    profitView: {
        flexDirection: 'row'
    },
    profitIcons: {
        width: 20,
        height: 20
    },
    new: {
        marginRight: 10,
        width: 68,
        height: 23,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'

    },
    newText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    stretch: {
        width: '89%',
        height: '70%',
    }
});

