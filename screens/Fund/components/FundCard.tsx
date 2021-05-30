import React, { FC } from "react";
import { RowSpacedView } from "../../../styles";
import {
  FundCardTitle,
  FundCardSubtitle,
  FundCardContainer,
  Text,
  FundTextContainer,
  ValuesTextContainer,
  ValuesContainer,
} from "../style";
import { FundProps } from "../types";
import { Profit, Label } from "../../../components";
import { View } from "react-native";
import Rating from "../../../components/Rating";
import { starNumbers } from "../../../constants/constants";
import { fundData } from "../../../constants/constants";
import colors from "../../../constants/colors";


const FundCard: FC<FundProps> = ({
  name,
  rating,
  minimumValue,
  profitability,
  type,
  status,
}) => {
  const fund = fundData[status];
  const label =
    status !== 0 ? <Label text={fund.text} color={fund.color} /> : null;
  const backgroundColor = status === 2 ? colors.closedCard : null;
  const opacity = status === 2 ? 0.5 : 1;

  return (
    //TODO verificar tamanho do card
    <FundCardContainer backgroundColor={backgroundColor} opacity={opacity}>
      <FundTextContainer>
        <RowSpacedView>
          <View>
            <FundCardTitle>{name}</FundCardTitle>
            <FundCardSubtitle>{type}</FundCardSubtitle>
          </View>
          {label}
        </RowSpacedView>
      </FundTextContainer>
      <ValuesContainer>
        <ValuesTextContainer>
          <Text>Classificação:</Text>
          <Rating
            quantity={starNumbers}
            rating={rating}
            customColor={status === 2 ? "grey" : null}
          />
        </ValuesTextContainer>
        <ValuesTextContainer>
          <Text>Valor mínimo:</Text>
          <FundCardSubtitle>{minimumValue}</FundCardSubtitle>
        </ValuesTextContainer>
        <ValuesTextContainer>
          <Text>Rentabilidade:</Text>
          <Profit profitability={parseInt(profitability)} grey={status === 2 ? true : false} />
        </ValuesTextContainer>
      </ValuesContainer>
    </FundCardContainer>
  );
};

export default FundCard;
