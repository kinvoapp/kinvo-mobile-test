import React from 'react';

import { View, Wrapper, ProfitabilityValueText, ProfitabilityValuePercentage, ProfitabilityIcon } from './styles';

import downArrowImg from '../../assets/downArrow.png';
import upArrowImg from '../../assets/upArrow.png';

interface IProfitabilityProps {
  percentage: number;
  disabled?: boolean;
}

const Profitability: React.FC<IProfitabilityProps> = ({ percentage, disabled = false }) => {
  return (
    <View>
      <ProfitabilityValueText disabled={disabled}>Rentabilidade: </ProfitabilityValueText>
      <Wrapper>
        <ProfitabilityIcon source={percentage >= 0 ? upArrowImg : downArrowImg} disabled={disabled} />
        <ProfitabilityValuePercentage isProfitability={percentage} disabled={disabled}>{percentage}%</ProfitabilityValuePercentage>
      </Wrapper>
    </View>
  );
}

export default Profitability;
