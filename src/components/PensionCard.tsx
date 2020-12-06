import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TextStyle, Image, Platform } from 'react-native';
import colors from '../assets/colors';
import typography from '../assets/fonts';
import icons from '../assets/icons';
import { IPension } from '../constants/types';
import Separator from './Separator';

interface IPensionCard {
  item: IPension;
}

const PensionCard: React.FC<IPensionCard> = ({ item }) => {
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
    if (Platform.OS === 'android') {
      return `R$ ${value}`;
    }
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  };

  const renderTax = (value: number): string => {
    return `${value.toFixed(2)}%`;
  };

  const renderRedemptionTerm = (value: number): string => {
    return `D+ ${value}`;
  };

  return (
    <View style={styles.card}>
      {/* Card Hader */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.type}>{item.type.toUpperCase()}</Text>
        </View>
      </View>

      {/* Item separator */}
      <Separator />

      {/* Info Rows */}
      <View style={styles.row}>
        <Text style={styles.rowText}>Valor mínimo:</Text>
        <Text style={styles.rowTextContent}>{renderMinValue(item.minimumValue)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowText}>Taxa:</Text>
        <Text style={styles.rowTextContent}>{renderTax(item.tax)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowText}>Resgate:</Text>
        <Text style={styles.rowTextContent}>{renderRedemptionTerm(item.redemptionTerm)}</Text>
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
    borderWidth: 0.5,
    borderColor: colors.borderColor,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default PensionCard;
