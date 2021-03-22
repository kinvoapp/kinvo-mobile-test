import React from "react";
import TEXT from "./text.json";
import * as S from "./styles";

export default function Notification({ status }) {
  const showNotification = (status) => {
    switch (status) {
      case 0:
        return null;
      case 1:
        return (
          <S.NotificationContainer status={status}>
            <S.Text>{TEXT.TEXT1}</S.Text>
          </S.NotificationContainer>
        );
      case 2:
        return (
          <S.NotificationContainer status={status}>
            <S.Text>{TEXT.TEXT2}</S.Text>
          </S.NotificationContainer>
        );
      default:
        return null;
    }
  };
  return showNotification(status);
}
