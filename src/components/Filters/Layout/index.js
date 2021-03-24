import React from "react";
import * as S from "./styles";

export default function Filters({
  isTaxPressed,
  isMinimumValuePressed,
  isRedemptionTermPressed,
  filterTax,
  filterMinimumValue,
  filterRedemptionTerm,
}) {
  return (
    <S.FiltersContainer>
      <S.FiltersButton isPressed={isTaxPressed} onPress={filterTax}>
        <S.FiltersButtonText isPressed={isTaxPressed}>
          SEM TAXA
        </S.FiltersButtonText>
      </S.FiltersButton>
      <S.FiltersButton
        isPressed={isMinimumValuePressed}
        onPress={filterMinimumValue}
      >
        <S.FiltersButtonText isPressed={isMinimumValuePressed}>
          R$ 100,00
        </S.FiltersButtonText>
      </S.FiltersButton>
      <S.FiltersButton
        isPressed={isRedemptionTermPressed}
        onPress={filterRedemptionTerm}
      >
        <S.FiltersButtonText isPressed={isRedemptionTermPressed}>
          D+1
        </S.FiltersButtonText>
      </S.FiltersButton>
    </S.FiltersContainer>
  );
}
