import React, { useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { fundsAsync } from '../../store/funds/thunks';
import { IconLoad } from '~assets/icons';
import { CardFunds, Header, ErrorNetwork, RenderCondition } from '~components';
import { useNetwork } from '~hooks';
import { Funds } from '~types';

import * as Component from './FundsScreen.styles';

export function FundsScreen() {
  const dispatch = useAppDispatch();
  const { execute, isErrorNetwork } = useNetwork();
  const { loading, funds } = useAppSelector(store => store.funds);

  const fetchFunds = useCallback(() => {
    execute(async () => {
      dispatch(fundsAsync());
    });
  }, [dispatch]);

  useEffect(() => fetchFunds(), [fetchFunds]);

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
