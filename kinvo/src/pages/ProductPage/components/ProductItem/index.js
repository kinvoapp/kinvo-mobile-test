import React, { Component } from "react";
import { Text, View } from "react-native";
import ProductType from "../../../../util/productType";
import styles from "./styles";
import { formatMoney, formatProfitability } from "../../../../util/formatter";

export default class Product extends Component {
  constructor(props) {
    super(props);
    const { item } = this.props;

    productTypeId = item.productTypeId;
    productName = item.productName;
    financialInstitutionName = item.financialInstitutionName;
    equity = formatMoney(item.equity);
    profitability = formatProfitability(item.profitability);
    color = ProductType.getColor(item.productTypeId);

    this.state = {
      productName,
      financialInstitutionName,
      equity,
      profitability,
      color
    };
  }

  renderFooter = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.equityContainerStyle}>
          <Text style={styles.equityTextStyle}>SALDO ATUAL</Text>
          <Text style={[styles.valueTextStyle, { color: this.state.color }]}>
            R${this.state.equity}
          </Text>
        </View>

        <View style={styles.profitabilityContainerStyle}>
          <Text style={styles.profitabilityTextStyle}>RENTABILIDADE</Text>
          <Text style={[styles.valueTextStyle, { color: this.state.color }]}>
            {this.state.profitability}%
          </Text>
        </View>
      </View>
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={[styles.textHeaderstyle, { color: this.state.color }]}>
          {" "}
          {this.state.financialInstitutionName}{" "}
        </Text>
      </View>
    );
  };

  renderBody = () => {
    return (
      <View style={[styles.body, { borderLeftColor: this.state.color }]}>
        <Text style={styles.bodyTextStyle}>{this.state.productName}</Text>
      </View>
    );
  };

  render() {
    const footer = this.renderFooter();
    const header = this.renderHeader();
    const body = this.renderBody();

    return (
      <View style={styles.container}>
        {header}
        {body}
        {footer}
      </View>
    );
  }
}
