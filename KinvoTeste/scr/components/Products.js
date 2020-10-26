import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Products({
  portfolioProductId,
  productTypeId,
  productName,
  financialInstitutionName,
  equity,
  profitability,
}) {
  function productColor(productTypeId) {
    let color;

    switch (productTypeId) {
      case 1:
        color = "#008DCB";
        break;
      case 2:
        color = "#D5A82C";
        break;
      case 3:
        color = "#94E5D2";
        break;
      case 4:
        color = "#86B2DE";
        break;
      case 5:
        color = "#5AAAD5";
        break;
      case 6:
        color = "#38BFA0";
        break;
      case 7:
        color = "#3E71B9";
        break;
      case 8:
        color = "#4C309B";
        break;
      case 9:
        color = "#86B2DE";
        break;
      case 10:
        color = "#B9B42C";
        break;
      case 11:
        color = "#4141D5";
        break;
      case 12:
        color = "#9390E5";
        break;
    }

    return color;
  }

  var color = productColor(productTypeId);

  const styles = StyleSheet.create({
    container: {
      borderBottomColor: "#CCCFD1",
      borderBottomWidth: 0.3,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 40,
      paddingTop: 0,
      margin: 15,
      width: "98%",
      alignSelf: "center",
    },
    sideBar: {
      backgroundColor: color,
      borderRadius: 10,
      width: 5,
      height: 35,
      marginRight: "0%",
      alignItems: "center",
      justifyContent: "center",
    },
    nomeInstituicao: {
      color: color,
      fontSize: 10,
      fontWeight: "bold",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 5,
    },
    nomeProduto: {
      paddingLeft: 0,
      color: "#707B81",
      fontSize: 14,
      fontWeight: "bold",
      width: "97%",
      height: 35,
      marginLeft: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    saldo: { color: "#707B81", fontSize: 10, fontWeight: "900", height: 12 },
    valorCotas: {
      color: color,
      fontSize: 20,
      fontWeight: "bold",
      height: 23,
    },
    rentabilidade: {
      color: "#707B81",
      fontSize: 10,
      fontWeight: "900",
      height: 12,
    },
    profitabilidade: {
      color: color,
      fontSize: 20,
      fontWeight: "bold",
      height: 23,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.nomeInstituicao}>{financialInstitutionName}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <View style={styles.sideBar}></View>
        <Text style={styles.nomeProduto} numberOfLines={2}>
          {productName}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={styles.saldo}>SALDO ATUAL</Text>
          <Text style={styles.valorCotas}>R${equity}</Text>
        </View>
        <View>
          <Text style={styles.rentabilidade}>RENTABILIDADE</Text>
          <Text style={styles.profitabilidade}>{profitability}%</Text>
        </View>
      </View>
    </View>
  );
}
