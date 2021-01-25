import React, { useCallback, ReactElement } from 'react';

import {
  View,
  StarContainer,
  ClassificationText,
  ClassificationIcon,
} from './styles';

import filledStar from '../../assets/filledStar.png';
import unfilledStar from '../../assets/unfilledStar.png';

interface IClassificationProps {
  rating: number;
  disabled?: boolean;
}

const Classification: React.FC<IClassificationProps> = ({ rating = 0, disabled = false, }) => {

  const handleShowRatingStar = useCallback(() => {
    const arrayOfStars: ReactElement[] = [];
    for(let index = 0; index < rating; index++) {
      arrayOfStars.push(<ClassificationIcon key={index} source={filledStar} disabled={disabled} />);
    }
    for(let indexY = 5; indexY > rating; indexY--) {
      arrayOfStars.push(<ClassificationIcon key={indexY} source={unfilledStar} disabled={disabled} />);
    }
    return arrayOfStars;
  }, [rating, disabled]);

  return (
    <View disabled={disabled}>
      <ClassificationText>Classificação: </ClassificationText>
      <StarContainer>
        {handleShowRatingStar()}
      </StarContainer>
    </View>
  );
};

export default Classification;
