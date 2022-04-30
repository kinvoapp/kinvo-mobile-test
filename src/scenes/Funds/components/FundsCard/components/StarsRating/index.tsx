import React from 'react';
import { useTheme } from 'styled-components/native';
import Icon from '~/components/Icon';
import { Body2 } from '~/styles/typography';
import { Container, StarsContainer } from './styles';

interface StarsRatingProps {
  rating: number;
}

const StarsRating = ({ rating }: StarsRatingProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Body2>Classificação:</Body2>

      <StarsContainer>
        {[1, 2, 3, 4, 5].map(value => (
          <Icon
            name={rating >= value ? 'filledStar' : 'unfilledStar'}
            size={17}
            color={colors.yellow}
            key={value}
          />
        ))}
      </StarsContainer>
    </Container>
  );
};

export default StarsRating;
