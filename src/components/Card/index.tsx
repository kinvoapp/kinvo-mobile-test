import React from 'react';
import {If} from '~/components'

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
  showButtonState?: boolean;
  showPredictions?: boolean;
}

const Card: React.FC<Props> = ({
    iconHeartState, 
    handleIconHeartState, 
    showClassification,
    showPredictions,
    showButtonState,
    ...rest
  }) => {
  return (
    <Wrapper typeButton={showClassification} {...rest} >
      <WrapperHeader>
        <ContentHeader>
          <Title>Magazine Luiza</Title>
          <Description>MGLU3</Description>
        </ContentHeader>
        {showButtonState
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

        <If condition={showPredictions || false}>
          <WrapperLine>
            <TextCard>Taxa:</TextCard>
            <DescriptionValue>2,00%</DescriptionValue>
          </WrapperLine>

          <WrapperLine>
            <TextCard>Resgate:</TextCard>
            <DescriptionValue>D+ 10</DescriptionValue>
          </WrapperLine>
        </If>

        <WrapperLine>
          <TextCard>Rentabilidade:</TextCard>
          <Profitability>-27%</Profitability>
        </WrapperLine>
      </Content>
    </Wrapper>
  );
};

export default Card;
