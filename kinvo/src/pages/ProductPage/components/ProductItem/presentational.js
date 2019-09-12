import React from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";

export default function Presentational(props) {
  const { formattedItem } = props;

  renderFinancialInstitutionName = () => {
    return (
      <View style={styles.header}>
        <Text
          style={[
            styles.textHeaderstyle,
            { color: formattedItem.colorOfProduct }
          ]}
        >
          {formattedItem.financialInstitutionName}
        </Text>
      </View>
    );
  };

  renderProductName = () => {
    return (
      <View
        style={[styles.body, { borderLeftColor: formattedItem.colorOfProduct }]}
      >
        <Text style={styles.bodyTextStyle}>{formattedItem.productName}</Text>
      </View>
    );
  };

  renderEquityAndProfitability = () => {
    const equity = this.renderEquity();
    const profitability = this.renderProfitability();
    return (
      <View style={styles.footer}>
        {equity}
        {profitability}
      </View>
    );
  };

  renderProfitability = () => (
    <View style={styles.profitabilityContainerStyle}>
      <Text style={styles.profitabilityTextStyle}>RENTABILIDADE</Text>
      <Text
        style={[styles.valueTextStyle, { color: formattedItem.colorOfProduct }]}
      >
        {formattedItem.profitability}
      </Text>
    </View>
  );

  renderEquity = () => (
    <View style={styles.equityContainerStyle}>
      <Text style={styles.equityTextStyle}>SALDO ATUAL</Text>
      <Text
        style={[styles.valueTextStyle, { color: formattedItem.colorOfProduct }]}
      >
        {formattedItem.equity}
      </Text>
    </View>
  );

  const financialInstitutionName = renderFinancialInstitutionName();
  const productName = renderProductName();
  const equityAndProfitability = renderEquityAndProfitability();

  return (
    <View style={styles.container}>
      {financialInstitutionName}
      {productName}
      {equityAndProfitability}
    </View>
  );
}
