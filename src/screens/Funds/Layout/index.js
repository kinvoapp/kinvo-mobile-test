import React from "react";
import { FlatList } from "react-native";
import ErrorMessage from "../../../components/ErrorMessage";
import Loading from "../../../components/Loading";
import ProductItem from "../../../components/ProductItem";
import * as S from "./styles";

export default function FundsScreen({
  fundsData,
  getFirstTwoWords,
  isLoading,
  showError,
  requestData,
}) {
  if (showError == false) {
    return (
      <S.Container>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={fundsData}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ProductItem
                title={getFirstTwoWords(item.name)}
                subtitle={item.type.toUpperCase()}
                rating={item.rating}
                status={item.status}
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
        <ErrorMessage onPress={() => requestData()} type="fundos" />
      </S.Container>
    );
  }
}
