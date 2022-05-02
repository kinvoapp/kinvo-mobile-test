import React, { useEffect, useState } from "react"
import { TouchableOpacity, ScrollView, ActivityIndicator } from "react-native"
import BoxContainer from "../../components/BoxContainer"
import BoxHeader from "../../components/BoxHeader"
import BoxItem from "../../components/BoxItem"
import ScreenContainer from "../../containers/ScreenContainer"
import { FavoriteContainer, Message, MessageContainer, MessageContainerCenter } from "./styles"
import * as ApiService from '../../services/ApiService';
import { IStocks } from "./types"
import HeartFilledIcon from "../../../assets/icons/heart-filled.svg";
import HeartEmptyIcon from "../../../assets/icons/heart-empty.svg";
import colors from "../../themes/colors"
import MessageBox from "../../components/MessageBox"
import MessageButton from "../../components/MessageButton"

export default function Stocks() {
    const [data, setData] = useState<IStocks[]>([]);
    const [list, setList] = useState<IStocks[]>([]);
    const [favorite, setFavorite] = useState(false);
    const [error, setError] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getStocksList();
    }, [refresh])

    const getStocksList = async () => {
        setRefresh(false);
        setError("");
        setLoading(true);
        try {
            const response = await ApiService.get("stocks");
            if (response && !response?.error) {
                const data = response.data;
                setData(data);

                let newList = [...data];
                newList.sort((currentItem, nextItem) => (currentItem.name > nextItem.name) ? 1 : (nextItem.name > currentItem.name) ? -1 : 0)
                setList(newList);
            }
            else {
                setError(response.error)
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
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
            <ScrollView>
                {
                    loading ?
                        <MessageContainerCenter>
                            <ActivityIndicator size="large" color={colors.colors.purple} />
                        </MessageContainerCenter> :
                        (error) ?
                            <MessageContainerCenter>
                                <MessageBox
                                    type="error"
                                    message={error}
                                />
                                <TouchableOpacity onPress={() => { setRefresh(true) }}>
                                    <MessageButton
                                        title="TENTAR NOVAMENTE"
                                    />
                                </TouchableOpacity>
                            </MessageContainerCenter>
                            :


                            (!loading && !error && list && list.length) > 0 ?
                                list.map(list =>
                                    <BoxContainer key={list.id}>

                                        <BoxHeader
                                            title={list.name}
                                            subtitle={list.ticker}
                                            favorite={list.favorite ?
                                                <FavoriteContainer onPress={() => handleFavorite(list.id)}>
                                                    <HeartFilledIcon onPress={() => handleFavorite(list.id)} />
                                                </FavoriteContainer>
                                                :
                                                <FavoriteContainer onPress={() => handleFavorite(list.id)}>
                                                    <HeartEmptyIcon onPress={() => handleFavorite(list.id)} />
                                                </FavoriteContainer>
                                            }
                                        />
                                        <BoxItem
                                            title="Valor Mínimo:"
                                            type="minimumValue"
                                            value={list.minimumValue!}
                                        />
                                        <BoxItem
                                            title="Rentabilidade:"
                                            type="profitability"
                                            value={list.profitability!}
                                        />
                                    </BoxContainer>
                                )
                                :


                                (!loading && !error) ?
                                    <MessageContainer>
                                        <Message>No momento não há Ações.</Message>
                                    </MessageContainer> :
                                    null
                }
            </ScrollView>
        </ScreenContainer>
    )


}