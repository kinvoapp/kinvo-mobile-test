import React, { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import NumberFormat from "react-number-format";
import Stocks from "../../../screens/Stocks";
import { Stock } from "../../../utils/apiTypes";
import Colors from "../../../utils/colors";
import Divider from "../../Divider";
import FavoriteButton from "../../FavoriteButton";
import Icon from "../../Icon";
import Typography from "../../Typography";
import CurrencyTypography from "../../Typography/CurrencyTypography";
import IndicatorTypography from "../../Typography/IndicatorTypography";
import Card from "../index";
import { HeaderContainer, Header } from "./styles";

type Props = Stock & {
  toggleFavorite: () => void;
};

function StockCard({
  name,
  isFavorite,
  ticker,
  id,
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

  const [active, setActive] = useState(false);
  return (
    <Card>
      <View
        style={{
          height: "100%",
        }}
      >
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
          keyExtractor={(a, i) => `${a.label}-${i}`}
          renderItem={({ item, index }) => (
            <View
              key={index}
              style={{
                marginTop: 10,
                marginBottom: 5,
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography type="body">{item.label}:</Typography>
              {item.value}
            </View>
          )}
        />
      </View>
    </Card>
  );
}

export default StockCard;
