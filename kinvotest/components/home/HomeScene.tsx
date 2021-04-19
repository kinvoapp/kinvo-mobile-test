import { FlatList, StyleSheet, View } from 'react-native';
import { HomeCardsArray } from './constants';
import { DEFAULT_BORDER_COLOR, DEFAULT_GREY, DEFAULT_PURPLE } from '../../assets/constants/colors';
import { HomeCard, HomeCardProps } from './HomeCard';
import React from 'react';

const renderHomeItem = ({ item }: { item: HomeCardProps; index: number }) => {
  const { titulo, subtitulo, novoBadge, icon } = item;

  return <HomeCard titulo={titulo} novoBadge={novoBadge} icon={icon} subtitulo={subtitulo} />;
};

export const HomeScene = () => {
  const { bgContainer, listContainerStyle } = styles;

  return (
    <View style={bgContainer}>
      <View style={{ flex: 3 }}>
        <FlatList
          renderItem={renderHomeItem}
          data={HomeCardsArray}
          contentContainerStyle={listContainerStyle}
          keyExtractor={(_, index: number) => index.toString()}
          bounces={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: DEFAULT_GREY,
  },
  listContainerStyle: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  cardTitleStyle: {
    color: DEFAULT_PURPLE,
    fontFamily: 'ms-bold',
    fontSize: 16,
    marginBottom: 5,
  },
  cardSubtitleStyle: {
    color: DEFAULT_BORDER_COLOR,
    fontFamily: 'ms-regular',
    fontSize: 10,
  },
  navContainer: {
    flex: 1,
  },
});
