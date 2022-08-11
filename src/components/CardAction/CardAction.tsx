import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconFavorite, IconFavoriteActive, IconLivreDown } from '~assets/icons';
import { currencyBRL } from '~utils';
import { DivisorInLine } from '../DivisorInLine/DivisorInLine';
import { TextBase } from '../TextBase/TextBase';

import * as Component from './CardAction.styles';

export type CardActionProps = { title: string; code: string };

export function CardAction({ title, code }: CardActionProps) {
  const [favorite, setFavorite] = useState<boolean>(false);
  const minimumValue = useMemo(() => currencyBRL(100), []);

  function handlerFavorite() {
    setFavorite(props => !props);
  }

  return (
    <Component.Container>
      <Component.Content>
        <View>
          <TextBase
            weight="Bold"
            font="Medium"
            size="default"
            color="secondary"
            style={styles.tile}>
            {title}
          </TextBase>

          <TextBase
            weight="Light"
            font="Bold"
            size="small"
            color="secondary"
            style={styles.codeText}>
            {code}
          </TextBase>
        </View>
        <Component.ButtonFavorite onPress={handlerFavorite}>
          {favorite ? <IconFavoriteActive /> : <IconFavorite />}
        </Component.ButtonFavorite>
      </Component.Content>

      <DivisorInLine isPadding="zero" />

      <Component.Footer>
        <Component.Row style={styles.minimumValue}>
          <TextBase weight="Light" font="Light" size="small" color="secondary">
            Valor mínimo:
          </TextBase>

          <TextBase weight="Bold" font="Bold" size="small" color="secondary">
            {minimumValue}
          </TextBase>
        </Component.Row>

        <Component.Row>
          <TextBase weight="Light" font="Light" size="small" color="secondary">
            Rentabilidade:
          </TextBase>

          <View style={styles.profitability}>
            <IconLivreDown />

            <TextBase weight="Bold" font="Bold" size="small" color="secondary">
              {minimumValue}
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
});
