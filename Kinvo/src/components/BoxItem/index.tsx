import React from "react"
import { Container, Title, Item, ProfitabilityContainer, BoxText, ProfitabilityText } from "./styles"
import { IBoxItem } from "./types"
import StarEmptyIcon from "../../../assets/icons/star-empty.svg";
import StarFilledIcon from "../../../assets/icons/star-filled.svg";
import UpIcon from "../../../assets/icons/up.svg";
import colors from "../../themes/light"
import { View } from "react-native";


export default function BoxItem(props: IBoxItem) {
    const getItem = () => {
        if (props.type === 'rating') {
            const stars = [];
            const numberStars = props.value;
            if (numberStars >= 0 && numberStars <= 5) {
                stars.push([...Array(numberStars)].map((e, i) => <StarFilledIcon fill={props.status ? (props.status === 2 ? colors.colors.closedText : "#f8c22e") : "#f8c22e"} key={i * 2} />))
                stars.push([...Array(5 - numberStars)].map((e, i) => <StarEmptyIcon fill={props.status ? (props.status === 2 ? colors.colors.closedText : "#f8c22e") : "#f8c22e"} key={i * 3} />))
                return stars
            }
            else {
                stars.push([...Array(5)].map((e, i) => <StarEmptyIcon />))
                return stars
            }
        }

        if (props.type === 'minimumValue') {
            return <BoxText closedType={props.status}>R$ {props.value.toString().replace(".", ",")}</BoxText>
        }

        if (props.type === 'tax') {
            return <BoxText closedType={props.status}>{props.value.toString().replace(".", ",")}%</BoxText>
        }

        if (props.type === 'redemptionTerm') {
            return <BoxText closedType={props.status}>D+{props.value.toString().replace(".", ",")}</BoxText>
        }

        if (props.type === 'profitability') {
            return (<View>
                {
                    (props.value) === 0 ?
                        <BoxText closedType={props.status}>{props.value.toString().replace(".", ",")}</BoxText>
                        :
                        <ProfitabilityContainer>
                            <UpIcon fill={props.status === 2 ? colors.colors.closedText : (props.value > 0) ? colors.colors.green : colors.colors.orange} width="8" height="8" style={props.value < 0 ? { transform: [{ rotateX: '180deg' }] } : null} />
                            <ProfitabilityText closedType={props.status} signValue={props.value > 0 ? "positive" : "negative"}>
                                {props.value.toString().replace(".", ",")}
                            </ProfitabilityText>
                        </ProfitabilityContainer>
                }
            </View>)
        }
    }

    return (
        <Container>
            <Title closedType={props.status}>{props.title}</Title>
            <Item closedType={props.status}>{getItem()}</Item>
        </Container>
    )
}