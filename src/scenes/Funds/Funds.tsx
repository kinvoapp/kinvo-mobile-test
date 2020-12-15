import React from 'react';
import { Text } from 'react-native';
import { Header } from '~/components';
import { Wrapper, WrapperCards, ScrollView, CardStyled } from './styles';

type Props = {
  goBack?: () => void;
}
const Funds: React.FC<Props> = ({goBack}) => {
  return (
    <Wrapper>
      <Header title="Fundos" showIcon goBack={goBack} />
      <WrapperCards>
      {/* <ScrollView> */}
        <CardStyled showClassification />
      {/* </ScrollView> */}
      </WrapperCards>
    </Wrapper>
  );
};

export default Funds;
