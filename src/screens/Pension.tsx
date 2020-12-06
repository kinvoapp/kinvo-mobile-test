import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../assets/colors';
import Container from '../components/Container';
import ListEmpty from '../components/ListEmpty';
import PensionCard from '../components/PensionCard';
import PensionFilters from '../components/PensionFilters';
import Separator from '../components/Separator';
import { IPension, Item } from '../constants/types';
import { RootDispatch, RootState } from '../store';

const Pension = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<RootDispatch>();
  const { loading, pensions } = useSelector((state: RootState) => state.pension);
  useEffect(() => {
    dispatch.pension.load();
  }, []);

  const renderItem = (item: IPension) => <PensionCard item={item} />;

  const handleToggledFilter = (filters: Item[]) => {
    dispatch.pension.setFilter(filters);
  };

  return (
    <Container screenName="Previdências" hasBackBtn onPress={() => navigation.goBack()}>
      {/* Loader */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      )}

      {/* Content */}
      {!loading && (
        <>
          <View style={styles.headerContainer}>
            {/* Filters */}
            <PensionFilters handleSetFilters={handleToggledFilter} />

            {/* Item Separator */}
            <Separator bgColor={colors.borderColor} marginVertical={20} />
          </View>

          {/* Items */}
          <View />
          <View style={styles.listContainer}>
            <FlatList
              data={pensions}
              renderItem={({ item }) => renderItem(item)}
              keyExtractor={(item, index) => `${item.name} + ${index}`}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20 }}
              style={styles.list}
              ListEmptyComponent={<ListEmpty pension />}
            />
          </View>
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.grey,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  listContainer: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  list: {
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey,
  },
});

export default Pension;
