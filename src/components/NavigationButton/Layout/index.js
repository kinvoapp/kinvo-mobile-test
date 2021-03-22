import React from "react";
import Notification from "../../../components/Notification";
import StocksNavIcon from "../../../../assets/images/navigationIcons/stocksNavIcon.svg";
import FundsNavIcon from "../../../../assets/images/navigationIcons/fundsNavIcon.svg";
import PensionsNavIcon from "../../../../assets/images/navigationIcons/pensionsNavIcon.svg";
import * as S from "./styles";

export default function NavigationButton({
  status,
  title,
  description,
  icon,
  ...otherNavigationButtonProps
}) {
  const handleNavIcon = (iconName) => {
    switch (iconName) {
      case "stocks":
        return <StocksNavIcon />;
      case "funds":
        return <FundsNavIcon />;
      case "pensions":
        return <PensionsNavIcon />;
      default:
        return null;
    }
  };
  return (
    <S.NavigationContainer {...otherNavigationButtonProps}>
      <S.Content>
        <S.IconContainer>{handleNavIcon(icon)}</S.IconContainer>
        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.TextContainer>
      </S.Content>
      <Notification status={status} />
    </S.NavigationContainer>
  );
}
