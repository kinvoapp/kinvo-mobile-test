import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { DEFAULT_TEXT_COLOR, NEGATIVE_COLOR, POSITIVE_COLOR, STAR_COLOR } from '../../assets/constants/colors';
import { getFormattedValue } from '../../assets/utils/utils';
import _ from 'lodash';

const RatingList = ({ rating }: { rating: number }) => {
  //sanity check dos valores de rating, trava o valor entre 0 e 5
  let usableRating = _.clamp(rating, 0, 5);

  // cria array com 5 posições de estrelas
  const totalStars = _.range(0, 5);
  // transforma em array de true/false baseado na rating, sendo true a estrela "preenchida"
  const currentRating = _.map(totalStars, (x) => x < usableRating);

  return (
    <FlatList
      data={currentRating}
      contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}
      horizontal
      bounces={false}
      renderItem={({ item: filledStar }) => (
        <Icon
          type={'antdesign'}
          size={20}
          // caso true, renderiza estrela preenchida
          name={filledStar ? 'star' : 'staro'}
          color={STAR_COLOR}
          style={{ marginLeft: 3 }}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export const FlatListItemRow = ({
  label,
  value,
  format,
}: {
  label: string;
  value: number | string;
  format: string;
}) => {
  const {
    labelStyle,
    cardSubtitleStyle,
    profitIconContainerStyle,
    iconStyle,
    titleContainerStyle,
    containerStyle,
    rightContainerStyle,
  } = styles;
  let valueColor = { color: DEFAULT_TEXT_COLOR, icon: '' };

  //obtém o formato de exibição correto para cada valor
  const formattedValue = getFormattedValue({ value, format });
  //Checa a exibição no caso de "profit"
  const showProfit = format === 'profit';
  const showRating = format === 'rating';

  // monta objeto para alterar cores e determinar icone no caso de valor positivo ou negativo
  if (showProfit && value !== 0)
    valueColor = value > 0 ? { color: POSITIVE_COLOR, icon: 'arrowup' } : { color: NEGATIVE_COLOR, icon: 'arrowdown' };

  return (
    <View style={containerStyle}>
      <View style={titleContainerStyle}>
        <View>
          <Text style={labelStyle}>{label}:</Text>
        </View>
      </View>
      <View style={rightContainerStyle}>
        <View style={profitIconContainerStyle}>
          {showRating ? <RatingList rating={+value} /> : null}
          {showProfit ? (
            <Icon type={'antdesign'} size={12} color={valueColor.color} name={valueColor.icon} style={iconStyle} />
          ) : null}
          {showRating ? null : <Text style={{ ...cardSubtitleStyle, color: valueColor.color }}>{formattedValue}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconImageStyle: { alignSelf: 'center' },
  titleContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 15,
  },
  cardTitleStyle: {
    color: DEFAULT_TEXT_COLOR,
    fontFamily: 'ms-bold',
    fontSize: 16,
    marginBottom: 3,
  },
  cardSubtitleStyle: {
    color: DEFAULT_TEXT_COLOR,
    fontFamily: 'ms-semibold',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  labelStyle: {
    color: DEFAULT_TEXT_COLOR,
    fontFamily: 'ms-medium',
    fontSize: 10,
  },
  containerStyle: { flexDirection: 'row', flex: 1 },
  profitIconContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    marginRight: 3,
  },
  rightContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
});
