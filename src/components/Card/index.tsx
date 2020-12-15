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
} from './styles';

type Props = {
  showClassification?: boolean;
  showButtonState?: boolean;
  showPredictions?: boolean;
  showIconHeart?: boolean;
  valueStar?: number;
  action?: any;
}

const Card: React.FC<Props> = ({
    showClassification,
    showPredictions,
    showButtonState,
    showIconHeart,
    valueStar,
    action,
    ...rest
  }) => {
  return (
    <Wrapper
      typeButton={showClassification} {...rest} 
      action={action.status === 1 ? true : false}
      key={action.id}
    >
      <WrapperHeader showIconHeart={showIconHeart}>
        <ContentHeader>
          <Title 
          numberOfLines={
            action.status != 0 
            && action.status != 1 ? 2 : 1}
          >
            {action.name}
          </Title>
          <Description>{action.ticker}</Description>
        </ContentHeader>
          
        <If condition={!!showIconHeart || false}>
          <IconHeart name='hearto' />
        </If> 

        <If condition={action.status === 0 || false}>
          <ButtonStateStyled  buttonPrimary />
        </If>

        <If condition={action.status === 1 || false}>
          <ButtonStateStyled />
        </If>
      </WrapperHeader>

      <Content>
        <If condition={showClassification || false}>
          <WrapperLine>
            <TextCard>Cassificação:</TextCard>
            <StarStyled valueStar={action.rating} />
          </WrapperLine>
        </If>

        <WrapperLine>
          <TextCard>Valor mínimo:</TextCard>
          <DescriptionValue>R$ {action.minimumValue}</DescriptionValue>
        </WrapperLine>

        <If condition={showPredictions || false}>
          <WrapperLine>
            <TextCard>Taxa:</TextCard>
            <DescriptionValue>{action.tax}%</DescriptionValue>
          </WrapperLine>

          <WrapperLine>
            <TextCard>Resgate:</TextCard>
            <DescriptionValue>D+ {action.redemptionTerm}</DescriptionValue>
          </WrapperLine>
        </If>

        <WrapperLine>
          <TextCard>Rentabilidade:</TextCard>
          <Profitability>{action.profitability}</Profitability>
        </WrapperLine>
      </Content>
    </Wrapper>
  );
};

export default Card;
