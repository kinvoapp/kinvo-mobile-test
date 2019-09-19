import React from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import CardItem from "./components/CardItem";
import Advertising from "./components/Advertising";
import LastRegisters from "./components/LastRegisters";

export default function Presentational(props) {
  const { cardItens,navigation } = props;

  renderRegisters = () => {
    return (
      <FlatList
        data={cardItens}
        renderItem={renderCardItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderAdvertising}
        ListFooterComponent={renderLastRegisters}
      />
    );
  };

  keyExtractor = item => item.title;


  renderCardItem = ({ item }) => <CardItem cardItem={item} />;

  renderAdvertising = () => <Advertising />;

  renderLastRegisters = () => <LastRegisters />;

  renderTitleRegister = () => (
    <View style={styles.titleArea}>
      <Text style={styles.titleText}>Cadastro</Text>
    </View>
  );

  renderCloseButton = () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.closeButton}>
        <Text style={{ color: "white",fontSize:20 }}>X</Text>
      </View> 
    </TouchableOpacity>
  );

  renderCloseArea = () => {
    const closeButton = renderCloseButton();
    return <View style={styles.closeArea}>{closeButton}</View>;
  };

  renderContent = () => {
    const registerScreen = renderRegisterScreen();

    return registerScreen;
  };

  renderRegisterScreen = () => {
    const title = renderTitleRegister();
    const closeArea = renderCloseArea();
    const registers = renderRegisters();

    return (
      <View style={styles.registerScreen}>
        {title}
        {registers}
        {closeArea}
      </View>
    );
  };

  const content = renderContent();
  return <SafeAreaView style={styles.container}>{content}</SafeAreaView>;
}

Presentational.propTypes = {
  cardItens: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

