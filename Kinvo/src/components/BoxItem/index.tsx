import React, { useEffect } from "react"
import { Container, Title, Item, NegativeNumber, PositiveNumber, ProfitabilityContainer, ProfitabilityText, ProfitabilityIcon, BoxText } from "./styles"
import { IBoxItem } from "./types"
import StarEmptyIcon from "../../../assets/icons/star-empty.svg";
import StarFilledIcon from "../../../assets/icons/star-filled.svg";
import UpIcon from "../../../assets/icons/up.svg";
import colors from "../../themes/colors"


export default function BoxItem(props: IBoxItem) {

    useEffect(() => {
        getItem();
    }, [props.type]);

    const getItem = () => {
        if (props.type === 'rating') {
            const stars = [];
            const numberStars = props.value;
            if (numberStars >= 0 && numberStars <= 5) {
                stars.push([...Array(numberStars)].map((e, i) => <StarFilledIcon key={i * 2} />))
                stars.push([...Array(5 - numberStars)].map((e, i) => <StarEmptyIcon key={i * 3} />))
                return stars
            }
            else {
                stars.push([...Array(5)].map((e, i) => <StarEmptyIcon />))
                return stars
            }
        }

        if (props.type === 'minimumValue') {
            return <BoxText>R$ {props.value.toString().replace(".", ",")}</BoxText>
        }

        if (props.type === 'tax') {
            return <BoxText>{props.value.toString().replace(".", ",")}%</BoxText>
        }

        if (props.type === 'redemptionTerm') {
            return <BoxText>D+{props.value.toString().replace(".", ",")}</BoxText>
        }

        if (props.type === 'profitability') {
            let profitability = props.value;
            let profitabilityItem = [];

            if (profitability < 0) {
                return <ProfitabilityContainer>
                    <ProfitabilityIcon>
                        <UpIcon fill={props.status === 2 ? "#B1B8BC" : colors.colors.red} width="8" height="8" />
                    </ProfitabilityIcon>
                    <ProfitabilityText>
                        <NegativeNumber>{props.value.toString().replace(".", ",")}</NegativeNumber>
                    </ProfitabilityText>
                </ProfitabilityContainer>
            }
            if (profitability > 0) {
                return <ProfitabilityContainer>
                    <UpIcon fill={props.status === 2 ? "#B1B8BC" : colors.colors.green} width="8" height="8" />
                    <ProfitabilityText>
                        <PositiveNumber>{props.value.toString().replace(".", ",")}</PositiveNumber>
                    </ProfitabilityText>
                </ProfitabilityContainer>
            }
            return <BoxText>{props.value.toString().replace(".", ",")}</BoxText>
        }
    }

    return (
        <Container>
            <Title>{props.title}</Title>
            <Item>{getItem()}</Item>
        </Container>
    )
}