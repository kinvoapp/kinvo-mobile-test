import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FavouriteButton = ({ isFavourite, onPress }) => {
  const handleFavourite = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <TouchableOpacity onPress={() => handleFavourite()}>
      <Icon
        name={isFavourite ? 'heart' : 'heart-outline'}
        size={25}
        color="#6f4dbf"
      />
    </TouchableOpacity>
  );
};

export default FavouriteButton;
