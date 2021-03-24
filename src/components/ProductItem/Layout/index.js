import React from "react";
import RatingStars from "../../RatingStars";
import FavoriteStock from "../../FavoriteStock";
import ProfitabilityArrows from "../../ProfitabilityArrows";
import text from "./text.json";
import Notification from "../../Notification";
import * as S from "./styles";

export default function ProductItem({
  isStocks,
  title,
  subtitle,
  rating,
  minimumValue,
  tax,
  redemptionTerm,
  profitability,
  status,
  isFavorited,
  favoriteStock,
  id,
}) {
  return (
    <S.Container status={status}>
      <S.Header>
        <S.ProductHeader>
          <S.ProductTitle status={status}>{title}</S.ProductTitle>
          <S.ProductSubtitle status={status}>{subtitle}</S.ProductSubtitle>
        </S.ProductHeader>
        <S.InfoContainer>
          {isStocks ? (
            <FavoriteStock
              isFavorited={isFavorited}
              id={id}
              favoriteStock={favoriteStock}
            />
          ) : (
            <Notification status={status} />
          )}
        </S.InfoContainer>
      </S.Header>
      {rating != undefined ? (
        <S.ProductTextContainer>
          <S.ProductKeyName status={status}>{text.keyName1}</S.ProductKeyName>
          <RatingStars status={status} rating={rating} />
        </S.ProductTextContainer>
      ) : null}
      {minimumValue != undefined ? (
        <S.ProductTextContainer>
          <S.ProductKeyName status={status}>{text.keyName2}</S.ProductKeyName>
          <S.ProductKeyValue
            status={status}
          >{`R$ ${minimumValue
            .toString()
            .replace(".", ",")}`}</S.ProductKeyValue>
        </S.ProductTextContainer>
      ) : null}
      {tax != undefined ? (
        <S.ProductTextContainer>
          <S.ProductKeyName>{text.keyName3}</S.ProductKeyName>
          <S.ProductKeyValue>{`${tax
            .toString()
            .replace(".", ",")}%`}</S.ProductKeyValue>
        </S.ProductTextContainer>
      ) : null}
      {redemptionTerm != undefined ? (
        <S.ProductTextContainer>
          <S.ProductKeyName>{text.keyName4}</S.ProductKeyName>
          <S.ProductKeyValue>{`D+ ${redemptionTerm}`}</S.ProductKeyValue>
        </S.ProductTextContainer>
      ) : null}
      {profitability != undefined ? (
        <S.ProductTextContainer>
          <S.ProductKeyName status={status}>{text.keyName5}</S.ProductKeyName>
          <S.ProductKeyValueContainer>
            <ProfitabilityArrows
              status={status}
              profitability={profitability}
            />
            <S.ProductKeyValueProfitability
              status={status}
              profitability={profitability}
            >
              {`${profitability.toString().replace(".", ",")}%`}
            </S.ProductKeyValueProfitability>
          </S.ProductKeyValueContainer>
        </S.ProductTextContainer>
      ) : null}
    </S.Container>
  );
}
