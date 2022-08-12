import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { IconArrowUp, IconLivreDown } from '~assets/icons';
import { Pension } from '~services/client';
import { currencyBRL } from '~utils';

import { DivisorInLine } from '../DivisorInLine/DivisorInLine';
import { TextBase } from '../TextBase/TextBase';
import { RenderCondition } from '../RenderCondition/RenderCondition';
import { Slogan } from '../Slogan/Slogan';

import * as Component from './CardPension.styles';

export type CardPensionProps = {
  pension: Pension;
  slogan: boolean;
};

export function CardPension({ pension, slogan = false }: CardPensionProps) {
  const { name, redemptionTerm, tax, type, id, minimumValue, profitability } =
    pension;

  const isMinimumValue = useMemo(
    () => currencyBRL(minimumValue, 'currency'),
    [minimumValue],
  );

  const isProfitability = useMemo(
    () => currencyBRL(profitability, 'percent'),
    [profitability],
  );

  const isTax = useMemo(() => currencyBRL(tax, 'percent'), [tax]);

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
        <RenderCondition condition={slogan}>
          <Slogan />
        </RenderCondition>
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

        <RenderCondition condition={true}>
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
                {isTax}
              </TextBase>
            </Component.Row>

            <Component.Row style={styles.minimumValue}>
              <TextBase
                weight="Light"
                font="Light"
                size="small"
                color="default">
                Resgate:
              </TextBase>

              <TextBase
                weight="Light"
                font="Light"
                size="small"
                color="default">
                <>D+ {redemptionTerm}</>
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
