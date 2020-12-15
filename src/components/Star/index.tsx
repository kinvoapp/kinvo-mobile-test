import React from 'react';


import { Wrapper, IconStar} from './styles';

type Props = {
  valueStar?: number | undefined;
}
const Star: React.FC<Props> = ({valueStar = 0}) => {

  return (
    <Wrapper>
      {[...Array(5)].map((star, i) => {
        const countingValue = i + 1;
        return (
            <IconStar name={countingValue <= valueStar ? 'star' : 'staro'} />
        )
      })}
    </Wrapper>
  );
};

export default Star;
