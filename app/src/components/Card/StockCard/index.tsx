import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Stock } from "../../../utils/apiTypes";
import Colors from "../../../utils/colors";
import Divider from "../../Divider";
import FavoriteButton from "../../FavoriteButton";
import Typography from "../../Typography";
import CurrencyTypography from "../../Typography/CurrencyTypography";
import IndicatorTypography from "../../Typography/IndicatorTypography";
import Card from "../index";
import {
  HeaderContainer,
  Header,
  ContentContainer,
  DetailContainer,
} from "./styles";

type Props = Stock & {
  toggleFavorite: () => void;
};

function StockCard({
  name,
  isFavorite,
  ticker,
  profitability,
  minimumValue,
  toggleFavorite,
}: Props) {
  const details = [
    {
      label: "Valor mínimo",
      value: <CurrencyTypography value={minimumValue} />,
    },
    {
      label: "Rentabilidade",
      value: <IndicatorTypography value={profitability} sufix={"%"} />,
    },
  ];

  return (
    <Card>
      <ContentContainer>
        <HeaderContainer>
          <Header>
            <Typography type="title" color={Colors.DARK}>
              {name}
            </Typography>
            <Typography type="ticker">{ticker}</Typography>
          </Header>
          <FavoriteButton active={!!isFavorite} onPress={toggleFavorite} />
        </HeaderContainer>
        <Divider />
        <FlatList
          data={details}
          keyExtractor={(item, i) => `${item.label}-${i}`}
          renderItem={({ item }) => (
            <DetailContainer>
              <Typography type="body">{item.label}:</Typography>
              {item.value}
            </DetailContainer>
          )}
        />
      </ContentContainer>
    </Card>
  );
}

export default StockCard;
