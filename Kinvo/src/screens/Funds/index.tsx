import React, { useEffect, useState } from "react"
import { ScrollView, ActivityIndicator, TouchableOpacity } from "react-native"
import BoxContainer from "../../components/BoxContainer"
import BoxHeader from "../../components/BoxHeader"
import BoxItem from "../../components/BoxItem"
import ScreenContainer from "../../containers/ScreenContainer"
import { IFunds } from "./types"
import * as ApiService from '../../services/ApiService';
import { Message, MessageContainer, MessageContainerCenter } from "./styles"
import colors from "../../themes/colors"
import MessageBox from "../../components/MessageBox"
import MessageButton from "../../components/MessageButton"

export default function Funds() {
    const [data, setData] = useState<IFunds[]>([]);
    const [list, setList] = useState<IFunds[]>([]);
    const [error, setError] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getFundsList();
    }, [refresh])

    const getFundsList = async () => {
        setRefresh(false);
        setError("");
        setLoading(true);
        try {
            const response = await ApiService.get("funds");
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
                                    <BoxContainer key={list.id} status={list.status}>

                                        <BoxHeader
                                            key={list.id}
                                            title={list.name}
                                            subtitle={list.type}
                                            status={list.status}
                                        />
                                        <BoxItem
                                            title="Classificação:"
                                            type="rating"
                                            value={list.rating}
                                            status={list.status}
                                        />
                                        <BoxItem
                                            title="Valor Mínimo:"
                                            type="minimumValue"
                                            value={list.minimumValue!}
                                            status={list.status}
                                        />
                                        <BoxItem
                                            title="Rentabilidade:"
                                            type="profitability"
                                            value={list.profitability!}
                                            status={list.status}
                                        />
                                    </BoxContainer>
                                )
                                :
                                (!loading && !error) ?
                                    <MessageContainer>
                                        <Message>No momento não há Fundos.</Message>
                                    </MessageContainer> :
                                    null
                }
            </ScrollView>
        </ScreenContainer>
    )
}