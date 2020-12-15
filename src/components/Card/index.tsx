import React from 'react';

import { Text } from 'react-native';

import { 
  Wrapper,
  WrapperHeader, 
  ContentHeader,
  IconHeart, 
  Title, 
  Description,
  DescriptionValue,
  Profitability,
  Content,
  WrapperLine,
  TextCard,
  IconLikeStyled
} from './styles';

type Props = {
  iconHeartState?: any;
  handleIconHeartState?: () => void;
}

const Card: React.FC<Props> = ({iconHeartState, handleIconHeartState}) => {
  return (
    <Wrapper>
      <WrapperHeader>
        <ContentHeader>
          <Title>Magazine Luiza</Title>
          <Description>MGLU3</Description>
        </ContentHeader>
        <IconLikeStyled showIconHeart={iconHeartState} />
      </WrapperHeader>

      <Content>
        <WrapperLine>
          <TextCard>Valor mínimo:</TextCard>
          <DescriptionValue>R$ 24,17</DescriptionValue>
        </WrapperLine>

        <WrapperLine>
          <TextCard>Rentabilidade:</TextCard>
          <Profitability>-27%</Profitability>
        </WrapperLine>
      </Content>
    </Wrapper>
  );
};

export default Card;
