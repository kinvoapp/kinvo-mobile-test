import React from "react";
import { FlatList } from "react-native";
import ErrorMessage from "../../../components/ErrorMessage";
import Loading from "../../../components/Loading";
import ProductItem from "../../../components/ProductItem";
import * as S from "./styles";

export default function StocksScreen({
  stocksData,
  isLoading,
  showError,
  requestData,
  isFavorited,
  favoriteStock,
}) {
  if (showError == false) {
    return (
      <S.Container>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={stocksData}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ProductItem
                isStocks={true}
                id={item.id}
                favoriteStock={favoriteStock}
                isFavorited={isFavorited}
                title={item.name}
                subtitle={item.ticker}
                minimumValue={item.minimumValue.toFixed(2)}
                profitability={item.profitability.toFixed(2)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <ErrorMessage onPress={() => requestData()} type="ações" />
      </S.Container>
    );
  }
}
