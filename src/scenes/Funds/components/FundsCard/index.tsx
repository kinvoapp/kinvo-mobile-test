import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Info, Separator } from '~/components';
import {
  getProfitabilityType,
  returnCurrencyValue,
  returnPercentageValue,
} from '~/utils';
import { Subtitle } from '~/styles/typography';
import FundStatus from './components/FundStatus';
import StarsRating from './components/StarsRating';
import { Container, Header, InfoContainer, Title } from './styles';

const FundCard = ({
  name,
  type,
  minimumValue,
  profitability,
  rating,
  status,
}: Fund) => {
  const minimumValueFormatted = useMemo(() => {
    return returnCurrencyValue(minimumValue);
  }, [minimumValue]);

  const profitabilityFormatted = useMemo(() => {
    return returnPercentageValue(profitability);
  }, [profitability]);

  const profitabilityType = useMemo(() => {
    return getProfitabilityType(profitability);
  }, [profitability]);

  return (
    <Container hasOpacity={status === 2}>
      <Header>
        <View>
          <Title hasChip={status !== 0}>{name}</Title>
          <Subtitle>{type}</Subtitle>
        </View>

        {status !== 0 && <FundStatus status={status} />}
      </Header>

      <Separator />

      <InfoContainer>
        <StarsRating rating={rating} />

        <Info
          label="Valor mínimo:"
          value={minimumValueFormatted}
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

export default FundCard;
