import React, {useState} from 'react';
import {Container, ButtonContainer, ButtonText} from './styles';

export function PensionsFilter() {
  const [taxFilter, setTaxFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);
  const [liquidityFilter, setLiquidityFilter] = useState(false);

  function handleTaxButton() {
    setTaxFilter(tax => !tax);
  }

  function handlePriceButton() {
    setPriceFilter(price => !price);
  }

  function handleLiquidityButton() {
    setLiquidityFilter(liquidity => !liquidity);
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
        isActive={priceFilter}
        onPress={handlePriceButton}>
        <ButtonText isActive={priceFilter}>R$ 100,00</ButtonText>
      </ButtonContainer>

      <ButtonContainer
        activeOpacity={0.8}
        isActive={liquidityFilter}
        onPress={handleLiquidityButton}>
        <ButtonText isActive={liquidityFilter}>D+1</ButtonText>
      </ButtonContainer>
    </Container>
  );
}
