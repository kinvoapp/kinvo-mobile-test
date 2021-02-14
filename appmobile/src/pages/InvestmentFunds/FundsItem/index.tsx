import React from 'react';

import { View } from 'react-native';

import { Profitability, Status, Rating } from '../../../components';
import formatMoney from '../../../utils/formatMoney';
import Funds from '../../../@types/funds';

import {
  Container,
  TopContent,
  Title,
  Type,
  BottomContent,
  MinimumValue,
  TextValue,
  Space,
} from './styles';

interface FundsItemProps {
  funds: Funds;
}

const FundsItem: React.FC<FundsItemProps> = ({ funds }) => {
  function handleWords(word: string) {
    const lestWord = word;
    const newWord = lestWord.split(' ').slice(0, 2).join(' ');

    return newWord;
  }

  function closeMarket() {
    if (funds.status === 2) {
      return true;
    }
    return false;
  }

  function handleStatus() {
    if (funds.status === 1) {
      const OpenMaket = <Status status={funds.status} />;
      return OpenMaket;
    }
    if (funds.status === 2) {
      const ClosedMarket = <Status status={funds.status} />;
      return ClosedMarket;
    }
    return null;
  }

  return (
    <Container isClosed={closeMarket()}>
      <TopContent>
        <View>
          <Title isClosed={closeMarket()}>{handleWords(funds.name)}</Title>
          <Type isClosed={closeMarket()}>{funds.type}</Type>
        </View>
        {handleStatus()}
      </TopContent>

      <BottomContent>
        <Space>
          <TextValue isClosed={closeMarket()}>Classificação:</TextValue>

          {/* <Rating /> */}
        </Space>
        <Space>
          <TextValue isClosed={closeMarket()}>Valor mínimo:</TextValue>
          <MinimumValue isClosed={closeMarket()}>
            {formatMoney(funds.minimumValue)}
          </MinimumValue>
        </Space>
        <Space>
          <TextValue isClosed={closeMarket()}>Rentabilidade:</TextValue>
          <Profitability isClosed={closeMarket()} value={funds.profitability} />
        </Space>
      </BottomContent>
    </Container>
  );
};

export default FundsItem;
