import React from 'react';
import { View } from 'react-native';

import ArrowUp from '../../assets/svgs/arrow-up.svg';
import ArrowDown from '../../assets/svgs/arrow-down.svg';
import Stars from '../../assets/svgs/stars.svg';

import {
  Container,
  Header,
  Title,
  SubTitle,
  ContentTag,
  Divider,
  Body,
  ContainerValues,
  ContentPrices,
  ValueMin,
  Price,
  Profitability,
  ProfitabilityNumber,
  Row,
  ContentTitles,
  ContentHeader,
  CloseTag,
  ProfitabilityNumberClose,
} from './styles';

import NewTag from '../../assets/svgs/new.svg';
import Close from '../../assets/svgs/close.svg';
import StarsClose from '../../assets/svgs/stars-close.svg';

interface ICardActions {
  name: string;
  type: string;
  minValue: number;
  rating: number;
  status: number;
  profitability: number;
}

const CardFunds: React.FC<ICardActions> = ({
  name,
  type,
  minValue,
  profitability,
  rating,
  status,
}) => {
  return (
    <>
      {status === 2 && (
        <Container close="0.5">
          <Header>
            <ContentHeader>
              <Title numberOfLines={1} ellipsizeMode="tail">
                {name}
              </Title>
              <SubTitle>{type}</SubTitle>
            </ContentHeader>

            <CloseTag>
              <Close />
            </CloseTag>
          </Header>

          <Body>
            <Divider />
          </Body>

          <ContainerValues>
            <ContentTitles>
              <ValueMin>Classificação:</ValueMin>
              <ValueMin>Valor mínimo:</ValueMin>
              <Profitability>Rentabilidade:</Profitability>
            </ContentTitles>

            <ContentPrices>
              <StarsClose />
              <Price>
                R$
                {minValue}
              </Price>

              <Row>
                {/* <ArrowUp color="#627179" /> */}
                <ProfitabilityNumberClose>
                  {' '}
                  {profitability}%
                </ProfitabilityNumberClose>
              </Row>
            </ContentPrices>
          </ContainerValues>
        </Container>
      )}

      {status >= 1 ? (
        <Container>
          <Header>
            <ContentHeader>
              <Title numberOfLines={1} ellipsizeMode="tail">
                {name}
              </Title>
              <SubTitle>{type}</SubTitle>
            </ContentHeader>

            <ContentTag>
              <NewTag />
            </ContentTag>
          </Header>

          <Body>
            <Divider />
          </Body>

          <ContainerValues>
            <ContentTitles>
              <ValueMin>Classificação:</ValueMin>
              <ValueMin>Valor mínimo:</ValueMin>
              <Profitability>Rentabilidade:</Profitability>
            </ContentTitles>

            <ContentPrices>
              <Stars />
              <Price>
                R$
                {minValue}
              </Price>

              <Row>
                <ArrowUp />
                <ProfitabilityNumber>
{' '}
{profitability}%</ProfitabilityNumber>
              </Row>
            </ContentPrices>
          </ContainerValues>
        </Container>
      ) : (
        <Container>
          <Header>
            <ContentHeader>
              <Title numberOfLines={1} ellipsizeMode="tail">
                {name}
              </Title>
              <SubTitle>{type}</SubTitle>
            </ContentHeader>

            <ContentTag>{/* <NewTag /> */}</ContentTag>
          </Header>

          <Body>
            <Divider />
          </Body>

          <ContainerValues>
            <ContentTitles>
              <ValueMin>Classificação:</ValueMin>
              <ValueMin>Valor mínimo:</ValueMin>
              <Profitability>Rentabilidade:</Profitability>
            </ContentTitles>

            <ContentPrices>
              <Stars />
              <Price>
                R$
                {minValue}
              </Price>

              <Row>
                <ArrowUp />
                <ProfitabilityNumber>
{' '}
{profitability}%</ProfitabilityNumber>
              </Row>
            </ContentPrices>
          </ContainerValues>
        </Container>
      )}
    </>
  );
};

export default CardFunds;
