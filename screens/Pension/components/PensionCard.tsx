import React, { FC } from "react";
import { RowSpacedView } from "../../../styles";
import {
  PensionCardTitle,
  PensionCardSubtitle,
  PensionCardContainer,
  Text,
  PensionTextContainer,
  ValuesTextContainer,
  ValuesContainer,
} from "../style";
import { PensionProps } from "../types";
import { Profit, Label } from "../../../components";
import { View } from "react-native";
import colors from "../../../constants/colors";

const PensionCard: FC<PensionProps> = ({
  name,
  tax,
  minimumValue,
  profitability,
  type,
  redemptionTerm,
}) => {
  return (
    //TODO verificar tamanho do card
    <PensionCardContainer>
      <PensionTextContainer>
        <RowSpacedView>
          <View>
            <PensionCardTitle>{name}</PensionCardTitle>
            <PensionCardSubtitle>{type}</PensionCardSubtitle>
          </View>
        </RowSpacedView>
      </PensionTextContainer>
      <ValuesContainer>
        <ValuesTextContainer>
          <Text>Valor Mínimo:</Text>
          <PensionCardSubtitle>{minimumValue}</PensionCardSubtitle>
        </ValuesTextContainer>

        <ValuesTextContainer>
          <Text>Taxa:</Text>
          <PensionCardSubtitle>{tax}</PensionCardSubtitle>
        </ValuesTextContainer>

        <ValuesTextContainer>
          <Text>Resgate:</Text>
          <PensionCardSubtitle>{redemptionTerm}</PensionCardSubtitle>
        </ValuesTextContainer>

        <ValuesTextContainer>
          <Text>Rentabilidade:</Text>
          <Profit profitability={parseInt(profitability)} />
        </ValuesTextContainer>
      </ValuesContainer>
    </PensionCardContainer>
  );
};

export default PensionCard;
