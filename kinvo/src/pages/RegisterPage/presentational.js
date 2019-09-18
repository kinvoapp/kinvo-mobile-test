import React from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PropTypes from "prop-types";

import styles from "./styles";
import CardItem from "./components/CardItem";
import Advertising from "./components/Advertising";
import LastRegisters from "./components/LastRegisters";

export default function Presentational(props) {
  const { cardItens } = props;

  renderRegisters = () => {
    return (
      <FlatList
        data={cardItens}
        renderItem={renderCardItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderAdvertising}
        ListFooterComponent={renderLastRegisters}
      />
    );
  };

  renderCardItem = ({ item }) => <CardItem cardItem={item} />;

  renderAdvertising = () => <Advertising />;

  renderLastRegisters = () => <LastRegisters />;

  renderTitleRegister = () => (
    <View style={styles.titleArea}>
      <Text style={styles.titleText}>Cadastro</Text>
    </View>
  );

  // separar funções do exit da area
  renderExitButton = () => (
    <TouchableOpacity>
      <View style={styles.exitButton}>
        {/* perguntar sobre nome do style do X */}
        <Text style={{ color: "white" }}>X</Text>
      </View>
    </TouchableOpacity>
  );

  renderExitArea = () => {
    const exitButton = renderExitButton();
    return <View style={styles.exitArea}>{exitButton}</View>;
  };

  renderContent = () => {
    const registerScreen = renderRegisterScreen();

    return registerScreen;
  };

  renderRegisterScreen = () => {
    const title = renderTitleRegister();
    const exitArea = renderExitArea();
    const registers = renderRegisters();

    return (
      <View style={styles.registerScreen}>
        {title}
        {registers}
        {exitArea}
      </View>
    );
  };

  const content = renderContent();
  return <SafeAreaView style={styles.container}>{content}</SafeAreaView>;
}

Presentational.propTypes = {
  cardItens: PropTypes.array.isRequired,
};

