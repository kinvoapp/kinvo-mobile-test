import React, { useMemo } from 'react';
import { Image } from 'react-native';

import fullstar from '../../assets/fullstar.png';
import lightstar from '../../assets/lightstar.png';
import { Container } from './styles';

interface RatingProps {
  rating: number;
  maxRating?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, maxRating = 4 }) => {
  const Stars: React.ReactNode = useMemo(() => {
    const stars = [
      <Image source={fullstar} />,
      <Image source={fullstar} />,
      <Image source={fullstar} />,
      <Image source={fullstar} />,
      <Image source={fullstar} />,
    ];
    const newStars = stars.splice(0, rating);

    for (let i = 0; i <= maxRating; i += 1) {
      if (newStars.length <= maxRating) {
        newStars.push(<Image key={i.toString()} source={lightstar} />);
      }
    }

    return newStars;
  }, [rating, maxRating]);

  // TODO add key
  return <Container>{Stars}</Container>;
};

export default Rating;
