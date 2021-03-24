import React from "react";
import { FlatList } from "react-native";
import text from "./text.json";
import ErrorMessage from "../../../components/ErrorMessage";
import Filters from "../../../components/Filters";
import Loading from "../../../components/Loading";
import ProductItem from "../../../components/ProductItem";
import * as S from "./styles";

export default function PensionsScreen({
  filteredData,
  getFirstTwoWords,
  isLoading,
  isTaxPressed,
  isMinimumValuePressed,
  isRedemptionTermPressed,
  filterTax,
  filterMinimumValue,
  filterRedemptionTerm,
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
            ListHeaderComponent={
              <Filters
                isTaxPressed={isTaxPressed}
                isMinimumValuePressed={isMinimumValuePressed}
                isRedemptionTermPressed={isRedemptionTermPressed}
                filterTax={filterTax}
                filterMinimumValue={filterMinimumValue}
                filterRedemptionTerm={filterRedemptionTerm}
              />
            }
            data={filteredData}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <S.Text>{text.TEXT1}</S.Text>}
            renderItem={({ item }) => (
              <ProductItem
                title={getFirstTwoWords(item.name)}
                subtitle={item.type.toUpperCase()}
                tax={item.tax.toFixed(2)}
                redemptionTerm={item.redemptionTerm}
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
        <ErrorMessage onPress={() => requestData()} type="previdências" />
      </S.Container>
    );
  }
}
