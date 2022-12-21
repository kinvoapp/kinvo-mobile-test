import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  IconArrowUp,
  IconLivreDown,
  IconStarBlack,
  IconStarBorderBlack,
} from '~assets/icons';
import { Funds, FundsStatus } from '~services/client';
import { currencyBRL } from '~utils';

import { DivisorInLine } from '../DivisorInLine/DivisorInLine';
import { TextBase } from '../TextBase/TextBase';
import { RenderCondition } from '../RenderCondition/RenderCondition';
import { Slogan } from '../Slogan/Slogan';

import * as Component from './CardFunds.styles';

export type CardFundsProps = {
  funds: Funds;
};

export function CardFunds({ funds }: CardFundsProps) {
  const { name, type, id, minimumValue, profitability, rating, status } = funds;

  const isMinimumValue = useMemo(
    () => currencyBRL(minimumValue, 'currency'),
    [minimumValue],
  );

  const isProfitability = useMemo(
    () => currencyBRL(profitability, 'percent'),
    [profitability],
  );

  function convertNumber(value: string) {
    return Number(value.split('%')[0]);
  }

  return (
    <Component.Container key={id}>
      <Component.Content>
        <View style={{ flex: 1 }}>
          <TextBase
            weight="Bold"
            font="Medium"
            size="default"
            color="default"
            style={styles.tile}>
            {name}
          </TextBase>

          <TextBase
            weight="Light"
            font="Bold"
            size="small"
            color="default"
            style={styles.codeText}>
            {type}
          </TextBase>
        </View>
        <RenderCondition condition={status === 0}>
          <Slogan />
        </RenderCondition>
      </Component.Content>

      <DivisorInLine isPadding="default" />

      <Component.Footer>
        <Component.Row style={styles.minimumValue}>
          <TextBase weight="Light" font="Light" size="small" color="default">
            Classificação:
          </TextBase>

          <View style={{ flexDirection: 'row' }}>
            {Array.from({ length: rating }).map((_, index) => (
              <IconStarBlack key={index} color="#F8C22E" />
            ))}
            {Array.from({ length: 5 - rating }).map((_, index) => (
              <IconStarBorderBlack key={index} color="#F8C22E" />
            ))}
          </View>
        </Component.Row>

        <Component.Row style={styles.minimumValue}>
          <TextBase weight="Light" font="Light" size="small" color="default">
            Valor mínimo:
          </TextBase>

          <TextBase weight="Bold" font="Bold" size="small" color="default">
            {isMinimumValue}
          </TextBase>
        </Component.Row>

        <Component.Row>
          <TextBase weight="Light" font="Light" size="small" color="default">
            Rentabilidade:
          </TextBase>

          <View style={styles.profitability}>
            <RenderCondition condition={convertNumber(isProfitability) >= 0}>
              <IconArrowUp style={styles.iconArrowUp} />
            </RenderCondition>

            <RenderCondition condition={convertNumber(isProfitability) < 0}>
              <IconLivreDown />
            </RenderCondition>

            <TextBase
              weight="Bold"
              font="Bold"
              size="small"
              color={
                convertNumber(isProfitability) >= 0 ? 'default' : 'secondary'
              }>
              {isProfitability}
            </TextBase>
          </View>
        </Component.Row>
      </Component.Footer>
    </Component.Container>
  );
}
const styles = StyleSheet.create({
  tile: { marginBottom: 3, numberOfLines: 1 },
  codeText: { textTransform: 'uppercase' },
  minimumValue: { marginBottom: 15 },
  profitability: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconArrowUp: { marginRight: 5 },
});
