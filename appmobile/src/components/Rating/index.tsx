import React, { useMemo } from 'react';
import { Image } from 'react-native';

import fullstar from '../../assets/fullstar.png';
import lightstar from '../../assets/lightstar.png';
import { colorsLight } from '../../styles/colors';
import { Container } from './styles';

interface RatingProps {
  rating: number;
  maxRating?: number;
  closedMarket?: boolean;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  closedMarket,
  maxRating = 4,
}) => {
  const Stars: React.ReactNode = useMemo(() => {
    function tintRating() {
      if (closedMarket === true) {
        return colorsLight.BLACK;
      }
      return undefined;
    }

    const stars = [
      <Image style={{ tintColor: tintRating() }} source={fullstar} key="5" />,
      <Image style={{ tintColor: tintRating() }} source={fullstar} key="6" />,
      <Image style={{ tintColor: tintRating() }} source={fullstar} key="7" />,
      <Image style={{ tintColor: tintRating() }} source={fullstar} key="8" />,
      <Image style={{ tintColor: tintRating() }} source={fullstar} key="9" />,
    ];
    const newStars = stars.splice(0, rating);

    for (let i = 0; i <= maxRating; i += 1) {
      if (newStars.length <= maxRating) {
        newStars.push(
          <Image
            style={{ tintColor: tintRating() }}
            key={(i + 1).toString()}
            source={lightstar}
          />,
        );
      }
    }
    return newStars;
  }, [rating, maxRating, closedMarket]);

  return <Container>{Stars}</Container>;
};

export default Rating;
