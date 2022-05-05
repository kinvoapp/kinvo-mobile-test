import React, { useEffect, useState } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import BoxContainer from "../../components/BoxContainer"
import BoxHeader from "../../components/BoxHeader"
import BoxItem from "../../components/BoxItem"
import ScreenContainer from "../../containers/ScreenContainer"
import { Container } from "./styles"
import * as ApiService from '../../services/ApiService';
import colors from "../../themes/light"
import MessageBox from "../../components/MessageBox"
import MessageButton from "../../components/MessageButton"
import { IPensions } from "./types"
import FilterButton from "../../components/FilterButton"
import FilterBox from "../../components/FilterBox"


export default function Pensions() {
    const [data, setData] = useState<IPensions[]>([]);
    const [list, setList] = useState<IPensions[]>([]);
    const [filterTax, setFilterTax] = useState(false);
    const [filterMinimumValue, setFilterMinimumValue] = useState(false);
    const [filterRedemptionTerm, setFilterRedemptionTerm] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        init();
    }, [])

    useEffect(() => {
        getFilteredList();
    }, [filterTax, filterMinimumValue, filterRedemptionTerm])

    const init = async () => {
        setError("");
        await getDbList();
        await getFilteredList();
    }

    const getDbList = async () => {
        setLoading(true)
        try {
            const response = await ApiService.get("pension");
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

    const getFilteredList = async () => {
        if (data.length > 0) {
            setLoading(true)
            let filteredList = [...data];

            if (filterTax) { filteredList = filteredList.filter((item) => item.tax === 0 ? true : false); }
            if (filterMinimumValue) { filteredList = filteredList.filter((item) => item.minimumValue === 100 ? true : false); }
            if (filterRedemptionTerm) { filteredList = filteredList.filter((item) => item.redemptionTerm === 1 ? true : false); }

            headerFilter();
            setList(filteredList)
            setLoading(false)
        }
    }

    function headerFilter() {
        return (
            <FilterBox>
                <FilterButton title="SEM TAXA" status={filterTax} onPress={() => setFilterTax(!filterTax)} />
                <FilterButton title="R$ 100,00" status={filterMinimumValue} onPress={() => setFilterMinimumValue(!filterMinimumValue)} />
                <FilterButton title="D+1" status={filterRedemptionTerm} onPress={() => setFilterRedemptionTerm(!filterRedemptionTerm)} />
            </FilterBox>
        )
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
                                ListHeaderComponent={headerFilter}
                                keyExtractor={item => String(item.id)}
                                renderItem={({ item }) => (
                                    <BoxContainer key={item.id}>
                                        <BoxHeader
                                            title={item.name}
                                            subtitle={item.type}

                                        />
                                        <BoxItem
                                            title="Valor Mínimo:"
                                            type="minimumValue"
                                            value={item.minimumValue!}
                                        />
                                        <BoxItem
                                            title="Taxa:"
                                            type="tax"
                                            value={item.tax!}
                                        />
                                        <BoxItem
                                            title="Resgate:"
                                            type="redemptionTerm"
                                            value={item.redemptionTerm!}
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
                            (!loading && !error && (filterTax || filterMinimumValue || filterRedemptionTerm)) ?
                                <Container>
                                    {headerFilter()}
                                    <MessageBox
                                        message="Nenhum resultado foi encontrado para os filtros selecionados."
                                    />
                                </Container>
                                :
                                (!loading && !error) ?
                                    <MessageBox
                                        message="No momento não há Previdências."
                                    />
                                    :
                                    null
            }
        </ScreenContainer>
    )
}