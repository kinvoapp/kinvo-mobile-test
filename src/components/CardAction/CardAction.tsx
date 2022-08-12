import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  IconArrowUp,
  IconFavorite,
  IconFavoriteActive,
  IconLivreDown,
} from '~assets/icons';

import { Stock } from '~services/client';
import { currencyBRL } from '~utils';
import { DivisorInLine } from '../DivisorInLine/DivisorInLine';
import { TextBase } from '../TextBase/TextBase';
import { RenderCondition } from '../RenderCondition/RenderCondition';

import * as Component from './CardAction.styles';

export type CardActionProps = {
  stock: Stock;
  onFavorite: () => void;
  type: 'pension' | 'stocks';
};

export function CardAction({ stock, onFavorite, type }: CardActionProps) {
  const { name, ticker, id, minimumValue, profitability } = stock;

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
        <View>
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
            {ticker}
          </TextBase>
        </View>
        <Component.ButtonFavorite onPress={onFavorite}>
          {stock.favorite ? <IconFavoriteActive /> : <IconFavorite />}
        </Component.ButtonFavorite>
      </Component.Content>

      <DivisorInLine isPadding="default" />

      <Component.Footer>
        <Component.Row style={styles.minimumValue}>
          <TextBase weight="Light" font="Light" size="small" color="default">
            Valor mínimo:
          </TextBase>

          <TextBase weight="Bold" font="Bold" size="small" color="default">
            {isMinimumValue}
          </TextBase>
        </Component.Row>

        <RenderCondition condition={type === 'pension'}>
          <>
            <Component.Row style={styles.minimumValue}>
              <TextBase
                weight="Light"
                font="Light"
                size="small"
                color="default">
                Taxa:
              </TextBase>

              <TextBase
                weight="Light"
                font="Light"
                size="small"
                color="default">
                {isProfitability}
              </TextBase>
            </Component.Row>

            <Component.Row style={styles.minimumValue}>
              <TextBase
                weight="Light"
                font="Light"
                size="small"
                color="default">
                Taxa:
              </TextBase>

              <TextBase
                weight="Light"
                font="Light"
                size="small"
                color="default">
                {isProfitability}
              </TextBase>
            </Component.Row>
          </>
        </RenderCondition>

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
  tile: { marginBottom: 3 },
  codeText: { textTransform: 'uppercase' },
  minimumValue: { marginBottom: 15 },
  profitability: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconArrowUp: { marginRight: 5 },
});
