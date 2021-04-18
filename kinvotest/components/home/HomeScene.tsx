import { FlatList, StyleSheet, View } from 'react-native';
import { HomeCardsArray } from './constants';
import { DEFAULT_BORDER_COLOR, DEFAULT_GREY, DEFAULT_PURPLE } from '../../assets/constants/colors';
import { HomeCard, HomeCardProps } from './HomeCard';
import React, { Component } from 'react';

export class HomeScene extends Component<{}, {}> {
  renderItem = ({ item }: { item: HomeCardProps; index: number }) => {
    const { titulo, subtitulo, novoBadge, icon } = item;

    return <HomeCard titulo={titulo} novoBadge={novoBadge} icon={icon} subtitulo={subtitulo} />;
  };

  render = () => {
    const { bgContainer } = styles;

    return (
      <View style={bgContainer}>
        <View style={{ flex: 3 }}>
          <FlatList
            renderItem={this.renderItem}
            data={HomeCardsArray}
            keyExtractor={(_, index: number) => index.toString()}
            scrollEnabled={false}
          />
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: DEFAULT_GREY,
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
