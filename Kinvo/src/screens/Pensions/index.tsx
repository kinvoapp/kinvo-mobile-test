import React, { useEffect, useState } from "react"
import { Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native"
import BoxContainer from "../../components/BoxContainer"
import BoxHeader from "../../components/BoxHeader"
import BoxItem from "../../components/BoxItem"
import ScreenContainer from "../../containers/ScreenContainer"
import { FilterContainer, FilterText, FilterView, Message, MessageContainer, MessageContainerCenter, PensionsProps } from "./styles"
import * as ApiService from '../../services/ApiService';
import { IPensions } from "./types"
import colors from "../../themes/colors"
import MessageBox from "../../components/MessageBox"
import MessageButton from "../../components/MessageButton"

export default function Pensions({ type }: PensionsProps) {
    const [data, setData] = useState<IPensions[]>([]);
    const [list, setList] = useState<IPensions[]>([]);
    const [filterTax, setFilterTax] = useState(false);
    const [filterMinimumValue, setFilterMinimumValue] = useState(false);
    const [filterRedemptionTerm, setFilterRedemptionTerm] = useState(false);
    const [error, setError] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPensionsList();
    }, [filterTax, filterMinimumValue, filterRedemptionTerm, refresh])

    const getPensionsList = async () => {
        setRefresh(false);
        setError("");
        setLoading(true);
        try {
            const response = await ApiService.get("pension");
            if (response && !response?.error) {
                const data = response.data;
                setData(data)

                let newList = [...data];
                newList.sort((currentItem, nextItem) => (currentItem.name > nextItem.name) ? 1 : (nextItem.name > currentItem.name) ? -1 : 0)

                if (filterTax) {
                    newList = newList.filter((item) => {
                        if (item.tax === 0) return true
                        return false
                    });
                }

                if (filterMinimumValue) {
                    newList = newList.filter((item) => {
                        if (item.minimumValue === 100) return true
                        return false
                    });
                }

                if (filterRedemptionTerm) {
                    newList = newList.filter((item) => {
                        if (item.redemptionTerm === 1) return true
                        return false
                    });
                }
                setList(newList)
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
                            <FilterContainer>
                                <FilterView type={filterTax ? "selected" : "unselected"}>
                                    <FilterText type={filterTax ? "selected" : "unselected"} onPress={() => setFilterTax(!filterTax)}>SEM TAXA</FilterText>
                                </FilterView>
                                <FilterView type={filterMinimumValue ? "selected" : "unselected"}>
                                    <FilterText type={filterMinimumValue ? "selected" : "unselected"} onPress={() => setFilterMinimumValue(!filterMinimumValue)}>R$ 100,00</FilterText>
                                </FilterView>
                                <FilterView type={filterRedemptionTerm ? "selected" : "unselected"}>
                                    <FilterText type={filterRedemptionTerm ? "selected" : "unselected"} onPress={() => setFilterRedemptionTerm(!filterRedemptionTerm)}>D+1</FilterText>
                                </FilterView>
                            </FilterContainer>
                }

                {
                    (!loading && !error && list && list.length) > 0 ?
                        list.map(list =>
                            <BoxContainer key={list.id}>

                                <BoxHeader
                                    title={list.name}
                                    subtitle={list.type}

                                />
                                <BoxItem
                                    title="Valor Mínimo:"
                                    type="minimumValue"
                                    value={list.minimumValue!}
                                />
                                <BoxItem
                                    title="Taxa:"
                                    type="tax"
                                    value={list.tax!}
                                />
                                <BoxItem
                                    title="Resgate:"
                                    type="redemptionTerm"
                                    value={list.redemptionTerm!}
                                />
                                <BoxItem
                                    title="Rentabilidade:"
                                    type="profitability"
                                    value={list.profitability!}
                                />
                            </BoxContainer>
                        )
                        :
                        (!loading && !error && (filterTax || filterMinimumValue || filterRedemptionTerm)) ?

                            <MessageContainer>
                                <MessageBox
                                    message="Nenhum resultado foi encontrado para os filtros selecionados"
                                />
                            </MessageContainer> :

                            (!loading && !error) ?
                                <MessageContainer>
                                    <Message>No momento não há Previdências.</Message>
                                </MessageContainer> :
                                null
                }
            </ScrollView>
        </ScreenContainer>
    )
}