import React from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";

export default function Presentational(props) {
  const { formattedItem } = props;

  renderFooter = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.equityContainerStyle}>
          <Text style={styles.equityTextStyle}>SALDO ATUAL</Text>
          <Text style={[styles.valueTextStyle, { color: formattedItem.color }]}>
            {formattedItem.equity}
          </Text>
        </View>

        <View style={styles.profitabilityContainerStyle}>
          <Text style={styles.profitabilityTextStyle}>RENTABILIDADE</Text>
          <Text style={[styles.valueTextStyle, { color: formattedItem.color }]}>
            {formattedItem.profitability}
          </Text>
        </View>
      </View>
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={[styles.textHeaderstyle, { color: formattedItem.color }]}>
          {formattedItem.financialInstitutionName}
        </Text>
      </View>
    );
  };

  renderBody = () => {
    return (
      <View style={[styles.body, { borderLeftColor: formattedItem.color }]}>
        <Text style={styles.bodyTextStyle}>{formattedItem.productName}</Text>
      </View>
    );
  };

  const header = renderHeader();
  const body = renderBody();
  const footer = renderFooter();

  return (
    <View style={styles.container}>
      {header}
      {body}
      {footer}
    </View>
  );
}
