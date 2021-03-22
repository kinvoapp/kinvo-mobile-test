import React from "react";
import RatingStars from "../../RatingStars";
import UpArrowIcon from "../../../../assets/images/icons/upArrowIcon.svg";
import DownArrowIcon from "../../../../assets/images/icons/downArrowIcon.svg";
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
}) {
  return (
    <S.Container>
      <S.Header>
        <S.ProductHeader>
          <S.ProductTitle>{title}</S.ProductTitle>
          <S.ProductSubtitle>{subtitle}</S.ProductSubtitle>
        </S.ProductHeader>
        <S.InfoContainer>
          {isStocks ? null : <Notification status={status} />}
        </S.InfoContainer>
      </S.Header>
      {rating != undefined ? (
        <S.ProductTextContainer>
          <S.ProductKeyName>{text.keyName1}</S.ProductKeyName>
          <RatingStars rating={rating} />
        </S.ProductTextContainer>
      ) : null}
      {minimumValue != undefined ? (
        <S.ProductTextContainer>
          <S.ProductKeyName>{text.keyName2}</S.ProductKeyName>
          <S.ProductKeyValue>{`R$ ${minimumValue
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
          <S.ProductKeyName>{text.keyName5}</S.ProductKeyName>
          <S.ProductKeyValueContainer>
            <S.ProductKeyValueProfitability profitability={profitability}>
              {`${profitability.toString().replace(".", ",")}%`}
            </S.ProductKeyValueProfitability>
          </S.ProductKeyValueContainer>
        </S.ProductTextContainer>
      ) : null}
    </S.Container>
  );
}
