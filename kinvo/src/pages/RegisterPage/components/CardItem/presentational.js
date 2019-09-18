import React from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Presentational(props) {
  const { key, color, message } = props.cardItem;

  renderCardName = () => (    
      <Text style={styles.cardName}>{key}</Text>   
  );

  renderIconCard = () => (
    <View    
    style={[styles.iconCard,{backgroundColor: color}]}
    >
        {/* simulando icone */}
      <Text style={{ color: "white", alignSelf: "center" }}>X</Text>
    </View>
  );
  
  renderPlusButton = () => (
      <Text style={styles.plusButton}>+</Text>
  );

  renderTitleAndIcon = () => {
    const cardName = this.renderCardName();
    const iconCard = this.renderIconCard();

    return (
      <View style={styles.titleAndIconArea}>
        {iconCard}
        {cardName}
      </View>
    );
  };

  renderTitleAndIconAndPlusButtonCard = () => {
    const titleAndIcon = this.renderTitleAndIcon();
    const plusButton = renderPlusButton();

    return (
      <View
        style={styles.titleAndIconAndPlusButtonArea}
      >
        {titleAndIcon}
        {plusButton}
      </View>
    );
  };

  renderMessage = () => {
    return (
        <Text style={styles.message}>{message}</Text>
    );
  };

  renderDivider = () => {
    return (
      <View
        style={styles.divider}
      ></View>
    );
  };

  renderCard = () => {
    const titleAndIconAndButton = renderTitleAndIconAndPlusButtonCard();
    const messageText = renderMessage();
    const divider = renderDivider();
    return (
      <TouchableOpacity>
        {titleAndIconAndButton}
        {divider}
        {messageText}
      </TouchableOpacity>
    );
  };

  renderContent = () => {
    const card = renderCard();
    return card;
  };

  const content = renderContent();

  return <View style={styles.container}>{content}</View>;
}

// props com isrequired dando erro
Presentational.propTypes = {
    key: PropTypes.string,
    color: PropTypes.string,
    message: PropTypes.string,  
  };
  
  Presentational.defaultProps = {
    key: '',
    color: '',
    message: '', 
  };