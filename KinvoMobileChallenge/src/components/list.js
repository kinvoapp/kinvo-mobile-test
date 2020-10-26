import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

export default class List extends Component {
  renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <View style={styles.productContainerContent}>
        <Text style={styles.financialInstitutionName}>
          {item.financialInstitutionName}
        </Text>
        <View style={styles.productNameContainer}>
          <View style={styles.sideProductNameBar} />
          <Text style={styles.productName}>{item.productName}</Text>
        </View>
        <View style={styles.equityProfitabilityContainer}>
          <View style={styles.equityContainer}>
            <Text style={styles.saldoText}>Saldo atual</Text>
            <Text style={styles.equityText}>R${item.equity}</Text>
          </View>
          <View style={styles.profitabilityContainer}>
            <Text style={styles.rentabilidadeText}>Rentabilidade</Text>
            <Text style={styles.profitabilityText}>{item.profitability}%</Text>
          </View>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <FlatList
        data={this.props.dataFromParent}
        keyExtractor={(item) => {
          item.portfolioProductId;
        }}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: 'white',
    marginBottom: 4,
    marginLeft: 0,
    marginRight: 0,
  },
  productContainerContent: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  productNameContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 7,
  },

  financialInstitutionName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  sideProductNameBar: {
    width: 6,
    backgroundColor: 'black',
    marginRight: 5,
    borderRadius: 20,
  },

  productName: {
    color: '#707B81',
    fontWeight: 'bold',
    fontSize: 14,
  },

  equityProfitabilityContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  equityContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },

  saldoText: {
    color: '#707B81',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },

  equityText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  profitabilityContainer: {
    alignItems: 'flex-end',
  },

  rentabilidadeText: {
    color: '#707B81',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },

  profitabilityText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
