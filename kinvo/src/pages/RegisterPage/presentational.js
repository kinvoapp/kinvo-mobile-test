import React from "react";
import {
  Text,  
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
  const { cardItems,onPressCloseButton } = props;

  renderRegisters = () => {
  keyExtractor = item => item.title;

    return (
      <FlatList
        data={cardItems}
        renderItem={renderCardItem}
        keyExtractor={keyExtractor}
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

  renderCloseButton = () => (
    <TouchableOpacity  style={styles.closeButton} onPress={onPressCloseButton}>
        <Text style={styles.closeIcon}>X</Text>
    </TouchableOpacity>
  );

  renderCloseArea = () => {
    const closeButton = renderCloseButton();
    return <View style={styles.closeArea}>{closeButton}</View>;
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

  const registerScreen = renderRegisterScreen();
  return <View style={styles.container}>{registerScreen}</View>;
}

Presentational.propTypes = {
  cardItems: PropTypes.array.isRequired,
  onPressCloseButton: PropTypes.func.isRequired
};

