import React from 'react';
import If from '../If';

import { IconHeartActive, IconHeart } from './styles';

type Props = {
  showIconHeart?: any;
}

const IconLike: React.FC<Props> = ({showIconHeart, ...rest}) => {
  return (
    <>
      {showIconHeart === true ? <IconHeartActive {...rest} /> : <IconHeart {...rest} />}
    </>
  );
};

export default IconLike;
