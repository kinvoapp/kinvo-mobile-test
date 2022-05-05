import React, { useEffect, useState } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import BoxContainer from "../../components/BoxContainer"
import BoxHeader from "../../components/BoxHeader"
import BoxItem from "../../components/BoxItem"
import ScreenContainer from "../../containers/ScreenContainer"
import { IFunds } from "./types"
import * as ApiService from '../../services/ApiService';
import { Container } from "./styles"
import colors from "../../themes/light"
import MessageBox from "../../components/MessageBox"
import MessageButton from "../../components/MessageButton"


export default function Funds() {
    const [list, setList] = useState<IFunds[]>([]);
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
            const response = await ApiService.get("funds");
            if (response && !response.error) {
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
                                    <BoxContainer key={item.id} status={item.status}>
                                        <BoxHeader
                                            key={item.id}
                                            title={item.name}
                                            subtitle={item.type}
                                            status={item.status}
                                        />
                                        <BoxItem
                                            title="Classificação:"
                                            type="rating"
                                            value={item.rating}
                                            status={item.status}
                                        />
                                        <BoxItem
                                            title="Valor Mínimo:"
                                            type="minimumValue"
                                            value={item.minimumValue!}
                                            status={item.status}
                                        />
                                        <BoxItem
                                            title="Rentabilidade:"
                                            type="profitability"
                                            value={item.profitability!}
                                            status={item.status}
                                        />
                                    </BoxContainer>
                                )}
                            />
                            :
                            (!loading && !error) ?
                                <MessageBox
                                    message="No momento não há Fundos."
                                />
                                :
                                null
            }
        </ScreenContainer>
    )
}