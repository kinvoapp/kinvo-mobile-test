import React, {useState} from 'react';
import {Container, ButtonContainer, ButtonText} from './styles';

interface FilterProps {
  taxFilter: boolean;
  valueFilter: boolean;
  redemptionFilter: boolean;
}
interface PensionsFilterProps {
  handleFilterPensions: ({
    valueFilter,
    taxFilter,
    redemptionFilter,
  }: FilterProps) => void;
}

export function PensionsFilter({handleFilterPensions}: PensionsFilterProps) {
  const [taxFilter, setTaxFilter] = useState(false);
  const [valueFilter, setValueFilter] = useState(false);
  const [redemptionFilter, setRedemptionFilter] = useState(false);

  async function handleTaxButton() {
    await setTaxFilter(tax => {
      handleFilterPensions({
        redemptionFilter,
        taxFilter: !tax,
        valueFilter,
      });
      return !tax;
    });
  }

  function handlePriceButton() {
    setValueFilter(price => {
      handleFilterPensions({
        redemptionFilter,
        taxFilter,
        valueFilter: !price,
      });
      return !price;
    });
  }

  function handleLiquidityButton() {
    setRedemptionFilter(redemption => {
      handleFilterPensions({
        redemptionFilter: !redemption,
        taxFilter,
        valueFilter,
      });
      return !redemption;
    });
  }

  return (
    <Container>
      <ButtonContainer
        activeOpacity={0.8}
        isActive={taxFilter}
        onPress={handleTaxButton}>
        <ButtonText isActive={taxFilter}>SEM TAXA</ButtonText>
      </ButtonContainer>

      <ButtonContainer
        activeOpacity={0.8}
        isActive={valueFilter}
        onPress={handlePriceButton}>
        <ButtonText isActive={valueFilter}>R$ 100,00</ButtonText>
      </ButtonContainer>

      <ButtonContainer
        activeOpacity={0.8}
        isActive={redemptionFilter}
        onPress={handleLiquidityButton}>
        <ButtonText isActive={redemptionFilter}>D+1</ButtonText>
      </ButtonContainer>
    </Container>
  );
}
