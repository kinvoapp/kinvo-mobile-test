import React from 'react';
import {ContainerRating, Star, StarOutline} from './styles';

interface StarsRatingProps {
  isClosed: Boolean;
  rating: number;
}

export function StarsRating({isClosed, rating}: StarsRatingProps) {
  return (
    <ContainerRating>
      {rating >= 1 ? (
        <Star isClosed={isClosed} />
      ) : (
        <StarOutline isClosed={isClosed} />
      )}
      {rating >= 2 ? (
        <Star isClosed={isClosed} />
      ) : (
        <StarOutline isClosed={isClosed} />
      )}
      {rating >= 3 ? (
        <Star isClosed={isClosed} />
      ) : (
        <StarOutline isClosed={isClosed} />
      )}
      {rating >= 4 ? (
        <Star isClosed={isClosed} />
      ) : (
        <StarOutline isClosed={isClosed} />
      )}
      {rating >= 5 ? (
        <Star isClosed={isClosed} />
      ) : (
        <StarOutline isClosed={isClosed} />
      )}
    </ContainerRating>
  );
}
