import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { IconLoad } from '~assets/icons';
import { CardFunds, Header, ErrorNetwork, RenderCondition } from '~components';
import { useNetwork } from '~hooks';
import { Funds, getFunds } from '~services/client';

import * as Component from './FundsScreen.styles';

export type FundsScreenProps = { children: string };

export function FundsScreen({ children }: FundsScreenProps) {
  const { execute, loading, isErrorNetwork } = useNetwork();
  const [funds, setFunds] = useState<Funds[]>([]);

  const fetchFunds = useCallback(() => {
    execute(async () => {
      const response = await getFunds();

      if (response.success) {
        setFunds(response.data);
      }
    });
  }, []);

  useEffect(() => fetchFunds(), [fetchFunds]);

  useEffect(() => console.log(funds), [funds]);

  function handleTryAgain() {
    fetchFunds();
  }

  return (
    <>
      <Header title="Fundos" hasArrowLeft />

      <Component.Container>
        <RenderCondition condition={!loading && !isErrorNetwork.current}>
          <FlatList<Funds>
            data={funds}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <CardFunds key={item.id.toString()} funds={item} />
            )}
          />
        </RenderCondition>

        <RenderCondition condition={loading}>
          <View style={styles.iconLoad}>
            <IconLoad />
          </View>
        </RenderCondition>

        <RenderCondition condition={!loading && isErrorNetwork.current}>
          <View style={styles.iconLoad}>
            <ErrorNetwork onTryAgain={handleTryAgain} slog="fundos" />
          </View>
        </RenderCondition>
      </Component.Container>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    paddingBottom: 100,
  },
  iconLoad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSimple: { marginRight: 20 },
});
