import React, { useEffect, useState, useRef } from "react";
import { SearchBar } from "react-native-elements";

import { Text, View, FlatList, Image, StatusBar } from "react-native";

import HeaderFlattButton from "./scr/components/HeaderButton";
import Products from "./scr/components/Products";
import stylesApp from "./scr/styles/stylesApp";

export default function App() {
  const isCancelled = useRef(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [queryResults, setQueryResults] = useState([]);

  function onPressTeste() {}

  function getData() {
    fetch(
      "https://e9a02505-3276-4fee-aede-c7023dfb9034.mock.pstmn.io/getProducts"
    )
      .then((res) => res.json())
      .then((res) => {
        if (!isCancelled.current) {
          setData(res.data);
          setQueryResults(res.data);
        }
      });
  }

  useEffect(() => {
    getData();

    if (query === "") {
      setQueryResults(data);
    } else {
      const results = data.filter((searchValue) =>
        searchValue.productName.toLowerCase().includes(query.toLowerCase())
      );
      setQueryResults(results);
    }

    return () => {
      isCancelled.current = true;
    };
  }, [query]);

  return (
    <View style={stylesApp.container}>
      <StatusBar hidden={false} />

      <View style={stylesApp.headerBar}>
        <View style={stylesApp.logoBackHeader}>
          <Image
            source={require("./scr/assets/backButton.png")}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
        <View style={stylesApp.headerButton}>
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
        inputContainerStyle={stylesApp.inputContainerStyle}
        containerStyle={stylesApp.containerStyle}
        value={query}
        onChangeText={(input) => setQuery(input)}
      />

      <FlatList
        data={queryResults}
        keyExtractor={(item, index) => index.toString()}
        style={{ height: "100%" }}
        renderItem={({ item }) => <Products {...item} />}
      />
      <View style={stylesApp.footer}>
        <View style={stylesApp.logo}>
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
        <View style={stylesApp.logo}>
          <Image source={require("./scr/assets/walletIcon.png")} />
          <Text style={stylesApp.logoFotterName}>Carteira</Text>
        </View>
        <View style={stylesApp.logo}>
          <Image source={require("./scr/assets/addIcon.png")} />
        </View>
        <View style={stylesApp.logo}>
          <Image source={require("./scr/assets/premiumIcon.png")} />
          <Text style={stylesApp.logoFotterName}>Premium</Text>
        </View>
        <View style={stylesApp.logo}>
          <Image source={require("./scr/assets/accountIcon.png")} />
          <Text style={stylesApp.logoFotterName}>Conta</Text>
        </View>
      </View>
    </View>
  );
}
