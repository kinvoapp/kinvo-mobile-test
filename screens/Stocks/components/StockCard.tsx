import React, { FC } from "react";
import { RowSpacedView } from "../../../styles";
import {
  StockCardTitle,
  StockCardSubtitle,
  StockCardContainer,
  Text,
  StockTextContainer,
  ValuesTextContainer,
  ProfitabilityView,
} from "../style";
import { StockProps } from "../types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Profit, WisheIcon } from "../../../components";
import { View } from "react-native";

const StockCard: FC<StockProps> = ({
  name,
  ticker,
  minimumValue,
  profitability,
  isFavorite,
  changeFavorite,
}) => {
  return (
    //TODO verificar tamanho do card
    <StockCardContainer>
      <StockTextContainer>
        <RowSpacedView>
          <View>
            <StockCardTitle>{name}</StockCardTitle>
            <StockCardSubtitle>{ticker}</StockCardSubtitle>
          </View>
          <TouchableOpacity onPress={changeFavorite}>
            <WisheIcon isFavorite={isFavorite} />
          </TouchableOpacity>
        </RowSpacedView>
      </StockTextContainer>

      <ValuesTextContainer>
        <RowSpacedView>
          <Text>Valor mínimo</Text>
          <StockCardSubtitle>{minimumValue}</StockCardSubtitle>
        </RowSpacedView>
        <ProfitabilityView>
          <Text>Rentabilidade</Text>
          <Profit profitability={parseInt(profitability)} />
        </ProfitabilityView>
      </ValuesTextContainer>
    </StockCardContainer>
  );
};

export default StockCard;
