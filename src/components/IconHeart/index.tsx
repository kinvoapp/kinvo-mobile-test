import React, {useState, useEffect} from 'react';

import { TouchableOpacity } from 'react-native';
import If from '../If';

import { IconHeart } from './styles';

type Props = {
  handleShowIconHeart?: () => void;
  showIconHeartActive?: boolean;
}
const IconHeartComponent: React.FC<Props> = () => {
  const [showIconHeartActive, setShowIconHeartActive] = useState(false);

  const handleShowIconHeart = () => {
    setShowIconHeartActive(!showIconHeartActive)
  }

  return (
    <>
      <If condition={showIconHeartActive || false}>
        <TouchableOpacity onPress={handleShowIconHeart}>
          <IconHeart name='heart' />
        </TouchableOpacity>
      </If> 

      <If condition={!showIconHeartActive || false}>
        <TouchableOpacity onPress={handleShowIconHeart}>
          <IconHeart name='hearto' />
        </TouchableOpacity>
      </If>
    </>
  );
};

export default IconHeartComponent;
