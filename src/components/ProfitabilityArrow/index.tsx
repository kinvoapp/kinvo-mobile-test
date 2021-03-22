import React from 'react';
import {Arrow} from './styles';
interface ProfitabilityArrow {
  isIncrease: Boolean;
}

export function ProfitabilityArrow({isIncrease}: ProfitabilityArrow) {
  return <Arrow isIncrease={isIncrease} />;
}
