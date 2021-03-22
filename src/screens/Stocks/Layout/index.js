import React from "react";
import ProductItem from "../../../components/ProductItem";
import * as S from "./styles";

export default function StocksScreen() {
  return (
    <S.Container>
      <ProductItem rating={4}></ProductItem>
    </S.Container>
  );
}
