import React from "react";
import * as S from "./styles";
import GreenArrowIcon from "../../../../assets/images/icons/greenArrowIcon.svg";
import RedArrowIcon from "../../../../assets/images/icons/redArrowIcon.svg";
import { colors } from "../../../styles";

export default function ProfitabilityArrows({ profitability, status }) {
  const handleArrows = (profitability) => {
    switch (true) {
      case profitability == 0:
        return null;
      case profitability > 0:
        return (
          <GreenArrowIcon
            color={status == 2 ? colors.tertiaryGray : colors.primaryGreen}
            opacity={status == 2 ? 0.5 : 1}
          />
        );
      case profitability < 0:
        return (
          <RedArrowIcon
            color={status == 2 ? colors.tertiaryGray : colors.primaryOrange}
            opacity={status == 2 ? 0.5 : 1}
          />
        );
      default:
        return null;
    }
  };
  return (
    <S.Container profitability={profitability}>
      {handleArrows(profitability)}
    </S.Container>
  );
}
