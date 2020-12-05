import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import colors from '../assets/colors';
import Container from '../components/Container';
import HomeCard from '../components/HomeCard';
import { HomeSections } from '../constants/home';
import { IHomeSection } from '../constants/types';

type IHomeProps = {};

const Home: React.FC<IHomeProps> = () => {
  const renderItem = (item: IHomeSection) => <HomeCard item={item} />;

  return (
    <Container screenName="Desafio">
      <View style={styles.listContainer}>
        <FlatList
          data={HomeSections}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => `${item.title} + ${index}`}
          style={styles.list}
        />
      </View>
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
});

export default Home;
