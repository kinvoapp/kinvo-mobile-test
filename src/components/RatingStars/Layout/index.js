import React from "react";
import FullStarIcon from "../../../../assets/images/icons/fullStarIcon.svg";
import EmptyStarIcon from "../../../../assets/images/icons/emptyStarIcon.svg";
import * as S from "./styles";

export default function RatingStars({ rating }) {
  const handleStarsNumbers = (rating) => {
    switch (rating) {
      case 0:
        return (
          <S.Container>
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon />
          </S.Container>
        );
      case 1:
        return (
          <S.Container>
            <FullStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon />
          </S.Container>
        );
      case 2:
        return (
          <S.Container>
            <FullStarIcon marginRight={5} />
            <FullStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon />
          </S.Container>
        );
      case 3:
        return (
          <S.Container>
            <FullStarIcon marginRight={5} />
            <FullStarIcon marginRight={5} />
            <FullStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon />
          </S.Container>
        );
      case 4:
        return (
          <S.Container>
            <FullStarIcon marginRight={5} />
            <FullStarIcon marginRight={5} />
            <FullStarIcon marginRight={5} />
            <FullStarIcon marginRight={5} />
            <EmptyStarIcon />
          </S.Container>
        );
      case 5:
        return (
          <S.Container>
            <FullStarIcon marginRight={5} />
            <FullStarIcon marginRight={5} />
            <FullStarIcon marginRight={5} />
            <FullStarIcon marginRight={5} />
            <FullStarIcon />
          </S.Container>
        );
      default:
        return (
          <S.Container>
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon marginRight={5} />
            <EmptyStarIcon />
          </S.Container>
        );
    }
  };
  return <S.Container>{handleStarsNumbers(rating)}</S.Container>;
}
