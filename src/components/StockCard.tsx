import React, { ReactNode } from 'react';
import { View, Text, TextStyle, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors';
import typography from '../assets/fonts';
import icons from '../assets/icons';
import { IStock } from '../constants/types';

interface IStockCard {
  item: IStock;
  handleIsFavorite: (stock: IStock) => void;
}

const StockCard: React.FC<IStockCard> = ({ item, handleIsFavorite }) => {
  const handleSetFavorite = (item: IStock) => {
    if (item.isFavorite) {
      handleIsFavorite({ ...item, isFavorite: false });
    } else {
      handleIsFavorite({ ...item, isFavorite: true });
    }
  };

  const renderFavorite = (item: IStock): ReactNode => {
    return (
      <TouchableOpacity onPress={() => handleSetFavorite(item)}>
        <Image source={item.isFavorite ? icons.heart : icons.heart_outlined} />
      </TouchableOpacity>
    );
  };

  const renderProfitability = (profit: number): ReactNode => {
    if (profit < 0) {
      return (
        <View style={styles.profitabilityTextContainer}>
          <Image source={icons.arrow_down} />
          <Text style={[styles.rowTextContent, { color: colors.red, marginLeft: 5 }]}>
            {`${profit}%`}
          </Text>
        </View>
      );
    } else if (profit === 0) {
      return (
        <View style={styles.profitabilityTextContainer}>
          <Text style={styles.rowTextContent}>{`${profit}%`}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.profitabilityTextContainer}>
          <Image source={icons.arrow_up} />
          <Text style={[styles.rowTextContent, { color: colors.green, marginLeft: 5 }]}>
            {`${profit}%`}
          </Text>
        </View>
      );
    }
  };

  const renderMinValue = (value: number): string => {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  };

  return (
    <View style={styles.card}>
      {/* Card Hader */}
      <View style={styles.headerContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.type}>{item.ticket}</Text>
        </View>

        {renderFavorite(item)}
      </View>

      {/* Item separator */}
      <View style={styles.border} />

      {/* Info Rows */}
      <View style={styles.row}>
        <Text style={styles.rowText}>Valor mínimo:</Text>
        <Text style={styles.rowTextContent}>{renderMinValue(item.minimumValue)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowText}>Rentabilidade:</Text>
        <Text>{renderProfitability(item.profitability)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 17,
    paddingVertical: 15,
  },
  border: {
    height: 1,
    backgroundColor: colors.grey,
    marginVertical: 15,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    width: '80%',
  },
  name: {
    fontWeight: 'bold',
    ...typography.title,
    color: colors.textGrey,
  } as TextStyle,
  type: {
    fontWeight: '600',
    ...typography.body,
    color: colors.textGrey,
  } as TextStyle,

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  rowText: {
    color: colors.textGrey,
    ...typography.caption,
  } as TextStyle,
  rowTextContent: {
    fontWeight: '600',
    color: colors.textGrey,
    ...typography.body,
  } as TextStyle,
  profitabilityTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StockCard;