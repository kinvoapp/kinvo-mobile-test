import React from "react";
import text from "./text.json";
import * as S from "./styles";

export default function ErrorMessage({ type, ...otherErrorMessageProps }) {
  return (
    <S.Container>
      <S.Title>{text.TITLE1}</S.Title>
      <S.Text>{text.TEXT1 + type}</S.Text>
      <S.Button {...otherErrorMessageProps}>
        <S.Text button={true}>{text.BUTTONTEXT1}</S.Text>
      </S.Button>
    </S.Container>
  );
}
