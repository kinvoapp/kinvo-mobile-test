import React from 'react';
import {If} from '~/components'

import { Text } from 'react-native';

import { 
  Wrapper,
  WrapperHeader, 
  ContentHeader,
  IconHeart, 
  ButtonStateStyled,
  StarStyled,
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
  showClassification?: boolean;
}

const Card: React.FC<Props> = ({iconHeartState, handleIconHeartState, showClassification}) => {
  return (
    <Wrapper typeButton={showClassification} >
      <WrapperHeader>
        <ContentHeader>
          <Title>Magazine Luiza</Title>
          <Description>MGLU3</Description>
        </ContentHeader>
        {showClassification 
          ? <ButtonStateStyled  buttonPrimary />
          : <IconLikeStyled showIconHeart={iconHeartState} />
        }
        
      </WrapperHeader>

      <Content>
        <If condition={showClassification || false}>
          <WrapperLine>
            <TextCard>Cassificação:</TextCard>
            <StarStyled />
          </WrapperLine>
        </If>

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
