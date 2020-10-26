import React, { useEffect, useState, useRef } from "react";
import { SearchBar } from "react-native-elements";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  StatusBar,
} from "react-native";

import HeaderFlattButton from "./scr/components/HeaderButton";
import Products from "./scr/components/Products";

export default function App() {
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);

  function onPressTeste() {}

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />

      <View style={styles.headerBar}>
        <View style={styles.logoBackHeader}>
          <Image
            source={require("./scr/assets/backButton.png")}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
        <View style={styles.headerButton}>
          <HeaderFlattButton text={"Carteira"} onPress={onPressTeste} />
          <HeaderFlattButton
            text={"Produtos"}
            onPress={onPressTeste}
            color={"#F5F8FA"}
          />
          <HeaderFlattButton text={"Extrato"} onPress={onPressTeste} />
        </View>
      </View>

      <SearchBar
        searchIcon={{
          color: "#9DA5AC",
        }}
        inputContainerStyle={styles.inputContainerStyle}
        containerStyle={styles.containerStyle}
        value={query}
        onChangeText={(input) => setQuery(input)}
      />

      <FlatList
        data={queryResults}
        keyExtractor={(item, index) => index.toString()}
        style={{ height: "100%" }}
        renderItem={({ item }) => <Products {...item} />}
      />
      <View style={styles.footer}>
        <View style={styles.logo}>
          <Image source={require("./scr/assets/resumoIcon.png")} />
          <Text
            style={{
              fontSize: 10,
              fontWeight: "900",
              color: "#707B81",
            }}
          >
            Resumo
          </Text>
        </View>
        <View style={styles.logo}>
          <Image source={require("./scr/assets/walletIcon.png")} />
          <Text style={styles.logoFotterName}>Carteira</Text>
        </View>
        <View style={styles.logo}>
          <Image source={require("./scr/assets/addIcon.png")} />
        </View>
        <View style={styles.logo}>
          <Image source={require("./scr/assets/premiumIcon.png")} />
          <Text style={styles.logoFotterName}>Premium</Text>
        </View>
        <View style={styles.logo}>
          <Image source={require("./scr/assets/accountIcon.png")} />
          <Text style={styles.logoFotterName}>Conta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoFotterName: { fontSize: 10, fontWeight: "900", color: "#707B81" },
  inputContainerStyle: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 29,
    height: "50%",
    width: "90%",
  },
  containerStyle: {
    backgroundColor: "#F5F8FA",
    height: "10.49%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "transparent",
    borderBottomColor: "#DAE0E3",
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
  },

  logo: {
    height: "20%",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    height: "10.49%",
    width: "100%",
    backgroundColor: "#F5F8FA",
    borderColor: "#DAE0E3",
    borderBottomWidth: 0.3,
    borderTopWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "0%",
    paddingBottom: "10%",
  },
  scroll: {
    height: "72%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#DAE0E3",
    borderWidth: 0.3,
  },
  footer: {
    backgroundColor: "#FFFFFF",
    height: "10.04%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#DAE0E3",
    borderWidth: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  titulo: {
    color: "#121212",
    fontSize: 50,
    width: "100%",
    paddingHorizontal: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  headerBar: {
    height: "8%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackHeader: {
    height: "100%",
    width: "20%",
    marginLeft: "20%",
    marginRight: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  headerButton: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "flex-end",
    marginRight: "5%",
    flexDirection: "row",
  },
});
