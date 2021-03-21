import React from 'react';
import Star from '../../../assets/icons/star.svg';
import UnStar from '../../../assets/icons/unStar.svg';
import StarDisabled from '../../../assets/icons/starDisabled.svg';
import UnStarDisabled from '../../../assets/icons/unStarDisabled.svg';
import {ContentStar} from './styles';

interface IkinStar {
  rate: number;
  isClosed?: boolean;
}
export default function KinStar({
  rate,
  isClosed = false,
}: IkinStar): JSX.Element {
  const render = () => {
    if (isClosed) {
      return [0, 1, 2, 3, 4].map((e, index) =>
        rate > index ? (
          <StarDisabled key={index} />
        ) : (
          <UnStarDisabled key={index} />
        ),
      );
    } else {
      return [0, 1, 2, 3, 4].map((e, index) =>
        rate > index ? <Star key={index} /> : <UnStar key={index} />,
      );
    }
  };
  return <ContentStar>{render()}</ContentStar>;
}
