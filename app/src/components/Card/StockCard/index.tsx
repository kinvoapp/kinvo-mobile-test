import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import NumberFormat from "react-number-format";
import Colors from "../../../utils/colors";
import Divider from "../../Divider";
import Typography from "../../Typography";
import CurrencyTypography from "../../Typography/CurrencyTypography";
import IndicatorTypography from "../../Typography/IndicatorTypography";
import Card from "../index";
import { HeaderContainer, Header } from "./styles";
// import { format } from 'number-currency-format';
// import { Container } from './styles';

type Props = {
  name: string;
  ticker: string;
  id: number;
};

function StockCard({ name, ticker, id }: Props) {
  const details = [
    {
      label: "Valor mínimo",
      value: <CurrencyTypography value={24.2} />,
    },
    {
      label: "Rentabilidade",
      value: <IndicatorTypography value={24.17} />,
    },
  ];
  return (
    <Card>
      <View
        style={{
          height: "100%",
          // flex: 1,
          // justifyContent: "flex-start",
          // alignItems: "flex-start",
          // backgroundColor: "green",
        }}
      >
        <HeaderContainer>
          <Header>
            <Typography type="title" color={Colors.DARK}>
              {name}
            </Typography>
            <Typography type="ticker">{ticker}</Typography>
          </Header>
          <View
            style={{
              width: 20,
              height: 18,
              backgroundColor: "blue",
              borderRadius: 4,
            }}
          />
        </HeaderContainer>
        <Divider />
        <FlatList
          data={details}
          // keyExtractor={}
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
              <Typography type="body">{item.label}</Typography>
              {item.value}
            </View>
          )}
          // keyExtractor={(detail, index) => index}
        />
        {/* {details.map(info => (
        ))} */}
      </View>
    </Card>
  );
}

export default StockCard;
