import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import {
  FUNDS, PENSION, POST_FIXED_INCOME, TREASURY_DIRECT,
  SAVINGS, PRE_FIXED_INCOME, BITCOIN, STOCK, DEBENTURES, CURRENCY,
  FII, BDR, CommonStyles,
} from '../commonValues';

const styles = StyleSheet.create({
  container: {
    height: 125,
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
  },
  institutionText: {
    fontSize: 10,
    fontFamily: CommonStyles.fontBlack,
  },
  nameProductContainer: {
    paddingLeft: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 1,
  },
  productNameText: {
    fontSize: 14,
    fontFamily: CommonStyles.fontBold,
    marginLeft: 5,
    textAlign: 'justify',

  },
  rectangle: {
    height: '90%',
    width: 5,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  itemText: {
    fontSize: 10,
    fontFamily: CommonStyles.fontSemibold,

  },
  saldoText: {
    color: 'blue',
    fontFamily: CommonStyles.fontBlack,
    fontSize: 20,
  },
  rentText: {
    color: 'blue',
    fontFamily: CommonStyles.fontBlack,
    fontSize: 20,
  },
  item: {
    flex: 1,
    marginBottom: 5,
  },
  bottomBarMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
  },
});

const ListItem = ({
  productName, financialInstitutionName, saldoText,
  profitability, onPress, productTypeId, portfolioProductId,
}) => {
  let typeColor = '';

  switch (productTypeId) {
    case FUNDS.id:
      typeColor = FUNDS.color;
      break;
    case PENSION.id:
      typeColor = PENSION.color;
      break;
    case POST_FIXED_INCOME.id:
      typeColor = POST_FIXED_INCOME.color;
      break;
    case TREASURY_DIRECT.id:
      typeColor = TREASURY_DIRECT.color;
      break;
    case SAVINGS.id:
      typeColor = SAVINGS.color;
      break;
    case PRE_FIXED_INCOME.id:
      typeColor = PRE_FIXED_INCOME.color;
      break;
    case BITCOIN.id:
      typeColor = BITCOIN.color;
      break;
    case STOCK.id:
      typeColor = STOCK.color;
      break;
    case DEBENTURES.id:
      typeColor = DEBENTURES.color;
      break;
    case CURRENCY.id:
      typeColor = CURRENCY.color;
      break;
    case FII.id:
      typeColor = FII.color;
      break;
    case BDR.id:
      typeColor = BDR.color;
      break;
    default:
      typeColor = 'black';
      break;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} key={portfolioProductId}>
        <View>
          <Text style={[styles.institutionText, { color: typeColor }]}>
            {financialInstitutionName}
          </Text>
          <View style={styles.nameProductContainer}>
            <View style={[styles.rectangle, { backgroundColor: typeColor }]} />
            <Text style={styles.productNameText}>{productName}</Text>
          </View>
          <View style={styles.bottomBar}>
            <View style={styles.bottomBarMenu}>
              <Text style={styles.itemText}>SALDO ATUAL</Text>
              <Text style={styles.itemText}>RENTABILIDADE</Text>
            </View>
            <View style={styles.bottomBarMenu}>
              <Text style={[styles.saldoText, { color: typeColor }]}>{`R$${saldoText}`}</Text>
              <Text style={[styles.rentText, { color: typeColor }]}>{`${profitability}%`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
