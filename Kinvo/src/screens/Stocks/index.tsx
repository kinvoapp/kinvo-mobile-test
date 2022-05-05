import React, { useEffect, useState } from "react"
import { TouchableOpacity, ActivityIndicator, FlatList } from "react-native"
import BoxContainer from "../../components/BoxContainer"
import BoxHeader from "../../components/BoxHeader"
import BoxItem from "../../components/BoxItem"
import ScreenContainer from "../../containers/ScreenContainer"
import { Container } from "./styles"
import * as ApiService from '../../services/ApiService';
import { IStocks } from "./types"
import HeartFilledIcon from "../../../assets/icons/heart-filled.svg";
import HeartEmptyIcon from "../../../assets/icons/heart-empty.svg";
import colors from "../../themes/light"
import MessageBox from "../../components/MessageBox"
import MessageButton from "../../components/MessageButton"


export default function Stocks() {
    const [data, setData] = useState<IStocks[]>([]);
    const [list, setList] = useState<IStocks[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        setError("");
        await getDbList();
    }

    const getDbList = async () => {
        setLoading(true)
        try {
            const response = await ApiService.get("stocks");
            if (response && !response.error) {
                setData(response.data)
                setList(response.data)
            }
            else {
                setError(response.error ? response.error : "Erro")
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const handleFavorite = async (id: number) => {
        const newData = data.map(item => {
            return item.id === id ? { ...item, favorite: !item.favorite } : item
        })
            .sort((currentItem, nextItem) => (currentItem.name > nextItem.name) ? 1 : (nextItem.name > currentItem.name) ? -1 : 0)
            .sort((currentItem, nextItem) => (currentItem.favorite === nextItem.favorite) ? 0 : (currentItem.favorite) ? -1 : 1)
        setData(newData);
        setList(newData);
    }

    return (
        <ScreenContainer>
            {
                loading ?
                    <Container verticalAlign="center">
                        <ActivityIndicator size="large" color={colors.colors.purple} />
                    </Container>
                    :
                    (error) ?
                        <Container verticalAlign="center">
                            <MessageBox
                                type="error"
                                message={error}
                            />
                            <MessageButton
                                type="tryAgain"
                                onPress={() => init()}
                            />
                        </Container>
                        :
                        (!loading && !error && list && list.length) > 0 ?
                            <FlatList
                                data={list}
                                keyExtractor={item => String(item.id)}
                                renderItem={({ item }) => (
                                    <BoxContainer key={item.id}>
                                        <BoxHeader
                                            title={item.name}
                                            subtitle={item.ticker}
                                            favorite={item.favorite ?
                                                <TouchableOpacity onPress={() => handleFavorite(item.id)}>
                                                    <HeartFilledIcon />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={() => handleFavorite(item.id)}>
                                                    <HeartEmptyIcon />
                                                </TouchableOpacity>
                                            }
                                        />
                                        <BoxItem
                                            title="Valor Mínimo:"
                                            type="minimumValue"
                                            value={item.minimumValue!}
                                        />
                                        <BoxItem
                                            title="Rentabilidade:"
                                            type="profitability"
                                            value={item.profitability!}
                                        />
                                    </BoxContainer>
                                )}
                            />
                            :
                            (!loading && !error) ?
                                <MessageBox
                                    message="No momento não há Ações."
                                />
                                :
                                null
            }
        </ScreenContainer>
    )
}