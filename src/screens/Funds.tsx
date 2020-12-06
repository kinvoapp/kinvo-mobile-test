import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Container';
import { IFund } from '../constants/types';
import colors from '../assets/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../store';
import FundCard from '../components/FundCard';

const Funds = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<RootDispatch>();
  const { loading, funds } = useSelector((state: RootState) => state.funds);

  useEffect(() => {
    dispatch.funds.load();
  }, []);

  const renderItem = (item: IFund) => <FundCard item={item} />;

  return (
    <Container screenName="Fundos" hasBackBtn onPress={() => navigation.goBack()}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      )}
      {!loading && (
        <View style={styles.listContainer}>
          <FlatList
            data={funds}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item, index) => `${item.name} + ${index}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            style={styles.list}
          />
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  list: {
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Funds;
