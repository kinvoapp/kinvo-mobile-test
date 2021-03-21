import React, {useState} from 'react';

///components
import KinTag from '../../tag';
import KinStar from '../../rate';
import KinDivider from '../../divider';

///assets
import ArrowDown from '../../../../assets/icons/arrow_down.svg';
import Favorite from '../../../../assets/icons/favorite.svg';
import UnFavorite from '../../../../assets/icons/unFavorite.svg';

import Colors from '../../../resources/colors';

import {
  Card,
  Title,
  Subtitle,
  ContentBetween,
  Label,
  Value,
  space,
} from './styles';

export interface IkinCardDefault extends Icard {
  favorite?: boolean;
  minimumValue: number;
  profitability: number;
  tax?: number;
  redemption?: number;
  rating?: number;
  isClosed?: boolean;
  onChanged?: Function;
}

export default function KinCardDefault({
  title,
  subtitle,
  minimumValue,
  profitability,
  favorite,
  tag,
  rating,
  isClosed = false,
  tax,
  redemption,
  onChanged,
}: IkinCardDefault): JSX.Element {
  const [favoriteState, setFavoriteState] = useState(favorite);

  const setFavoriteCard = () => {
    setFavoriteState(!favoriteState);
    onChanged && onChanged();
  };

  const renderRating = () => {
    if (rating || rating === 0) {
      return (
        <ContentBetween style={space}>
          <Label closed={isClosed}>Classificação:</Label>
          <KinStar rate={rating} isClosed={isClosed} />
        </ContentBetween>
      );
    }
  };
  const renderTax = () => {
    if (tax || tax === 0) {
      return (
        <ContentBetween style={space}>
          <Label>Taxa:</Label>
          <Value color={Colors.gray01}>{tax}%</Value>
        </ContentBetween>
      );
    }
  };
  const renderRedemption = () => {
    if (redemption || redemption == 0) {
      return (
        <ContentBetween style={space}>
          <Label>Resgate:</Label>
          <Value color={Colors.gray01}>D+{redemption}</Value>
        </ContentBetween>
      );
    }
  };

  const renderElementBetween = () => {
    if (favorite != null) {
      return favoriteState ? (
        <Favorite onPress={() => setFavoriteCard()} />
      ) : (
        <UnFavorite onPress={() => setFavoriteCard()} />
      );
    } else if (tag?.name) {
      return <KinTag name={tag.name} color={tag.color} />;
    } else {
      return <></>;
    }
  };
  const getColorProfitability = (): string => {
    if (!isClosed) {
      return profitability < 0 ? Colors.warning : Colors.secundary;
    } else {
      return Colors.gray01;
    }
  };
  return (
    <Card closed={isClosed}>
      <ContentBetween>
        <Title closed={isClosed}>{title}</Title>
        {renderElementBetween()}
      </ContentBetween>
      <Subtitle closed={isClosed}>{subtitle}</Subtitle>
      <KinDivider />
      {renderRating()}
      <ContentBetween style={space}>
        <Label closed={isClosed}>Valor mínimo:</Label>
        <Value closed={isClosed} color={Colors.gray01}>
          R$ {minimumValue}
        </Value>
      </ContentBetween>
      {renderTax()}
      {renderRedemption()}
      <ContentBetween>
        <Label closed={isClosed}>Rentabilidade:</Label>
        <Value closed={isClosed} color={getColorProfitability()}>
          <ArrowDown
            rotation={profitability < 0 ? 180 : 0}
            stroke={getColorProfitability()}
          />{' '}
          {profitability}%
        </Value>
      </ContentBetween>
    </Card>
  );
}
