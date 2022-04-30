import React, { useMemo } from 'react';
import { Info, Separator } from '~/components';
import {
  getProfitabilityType,
  returnCurrencyValue,
  returnPercentageValue,
} from '~/utils';
import { Heading2, Subtitle } from '~/styles/typography';
import { Container, Header, InfoContainer } from './styles';

const PensionCard = ({
  name,
  type,
  minimumValue,
  tax,
  redemptionTerm,
  profitability,
}: Pension) => {
  const minimumValueFormatted = useMemo(() => {
    return returnCurrencyValue(minimumValue);
  }, [minimumValue]);

  const profitabilityFormatted = useMemo(() => {
    return returnPercentageValue(profitability);
  }, [profitability]);

  const taxFormatted = useMemo(() => {
    return returnPercentageValue(tax);
  }, [tax]);

  const redemptionTermFormatted = useMemo(() => {
    return `D+ ${redemptionTerm}`;
  }, [redemptionTerm]);

  const profitabilityType = useMemo(() => {
    return getProfitabilityType(profitability);
  }, [profitability]);

  return (
    <Container>
      <Header>
        <Heading2>{name}</Heading2>
        <Subtitle>{type}</Subtitle>
      </Header>

      <Separator />

      <InfoContainer>
        <Info
          label="Valor mínimo:"
          value={minimumValueFormatted}
          style={{ marginBottom: 16 }}
        />

        <Info label="Taxa:" value={taxFormatted} style={{ marginBottom: 16 }} />

        <Info
          label="Resgate:"
          value={redemptionTermFormatted}
          style={{ marginBottom: 16 }}
        />

        <Info
          label="Rentabilidade"
          value={profitabilityFormatted}
          profitabilityType={profitabilityType}
        />
      </InfoContainer>
    </Container>
  );
};

export default PensionCard;
