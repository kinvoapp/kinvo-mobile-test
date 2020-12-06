import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TextStyle, Image } from 'react-native';
import colors from '../assets/colors';
import typography from '../assets/fonts';
import icons from '../assets/icons';
import { IFund } from '../constants/types';
import LabelChip from './LabelChip';

interface IFundCard {
  item: IFund;
}

const FundCard: React.FC<IFundCard> = ({ item }) => {
  const disabled: boolean = item.status === 2;

  const renderStatus = (status: number): ReactNode => {
    switch (status) {
      case 0:
        return <View />;
        break;
      case 1:
        return <LabelChip label="Novo" bgColor={colors.aqua} />;
      case 2:
        return <LabelChip label="Fechado" bgColor={colors.darkGrey} />;
      default:
        break;
    }
  };

  const renderRating = (rating: number): ReactNode => {
    let stars = [];

    if (rating % 1 === 0 && rating <= 5) {
      for (let i = 1; i <= rating; i++) {
        stars.push(
          <Image
            key={i}
            source={disabled ? icons.star_disabled : icons.star}
            style={disabled && { opacity: 0.5 }}
          />,
        );
      }

      const difference = (rating - 5) * -1;

      if (difference > 0) {
        for (let i = 1; i <= difference; i++) {
          stars.push(
            <Image
              key={Math.random() + i}
              source={disabled ? icons.star_disabled_empty : icons.star_empty}
              style={disabled && { opacity: 0.5 }}
            />,
          );
        }
      }
    }

    return stars;
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

  return (
    <View style={[styles.card, disabled && { backgroundColor: colors.disabledGrey }]}>
      {/* Card Hader */}
      <View style={styles.headerContainer}>
        <View style={styles.nameContainer}>
          <Text style={[styles.name, disabled && { opacity: 0.5 }]}>{item.name}</Text>
          <Text style={[styles.type, disabled && { opacity: 0.5 }]}>{item.type.toUpperCase()}</Text>
        </View>

        <View>
          <Text>{renderStatus(item.status)}</Text>
        </View>
      </View>

      {/* Item separator */}
      <View style={styles.border} />

      {/* Info Rows */}
      <View style={styles.row}>
        <Text style={[styles.rowText, disabled && { opacity: 0.5 }]}>Classificação:</Text>
        <Text>{renderRating(item.rating)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.rowText, disabled && { opacity: 0.5 }]}>Valor mínimo:</Text>
        <Text
          style={[
            styles.rowTextContent,
            disabled && { opacity: 0.5 },
          ]}>{`R$ ${item.minimumValue}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.rowText, disabled && { opacity: 0.5 }]}>Rentabilidade:</Text>
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
    width: '70%',
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
    // alignItems: 'center',
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

export default FundCard;
