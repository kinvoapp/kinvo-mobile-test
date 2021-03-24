import React from "react";
import EmptyHeartIcon from "../../../../assets/images/icons/emptyHeartIcon.svg";
import FullHeartIcon from "../../../../assets/images/icons/fullHeartIcon.svg";
import * as S from "./styles";

export default function FavoriteStock({ isFavorited, favoriteStock, id }) {
  return (
    <S.Container onPress={() => favoriteStock(id)} id={id}>
      {isFavorited.includes(id) ? <FullHeartIcon /> : <EmptyHeartIcon />}
    </S.Container>
  );
}
