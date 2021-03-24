import React from "react";
import FullStarIcon from "../../../../assets/images/icons/fullStarIcon.svg";
import EmptyStarIcon from "../../../../assets/images/icons/emptyStarIcon.svg";
import { colors } from "../../../styles";
import * as S from "./styles";

export default function RatingStars({ rating, status }) {
  const handleStarsNumbers = (rating) => {
    switch (rating) {
      case 0:
        return (
          <S.Container>
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
          </S.Container>
        );
      case 1:
        return (
          <S.Container>
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
          </S.Container>
        );
      case 2:
        return (
          <S.Container>
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
          </S.Container>
        );
      case 3:
        return (
          <S.Container>
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
          </S.Container>
        );
      case 4:
        return (
          <S.Container>
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
          </S.Container>
        );
      case 5:
        return (
          <S.Container>
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <FullStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <FullStarIcon
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
          </S.Container>
        );
      default:
        return (
          <S.Container>
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              marginRight={5}
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
            <EmptyStarIcon
              color={status == 2 ? colors.tertiaryGray : colors.primaryYellow}
              opacity={status == 2 ? 0.5 : 1}
            />
          </S.Container>
        );
    }
  };
  return <S.Container>{handleStarsNumbers(rating)}</S.Container>;
}
