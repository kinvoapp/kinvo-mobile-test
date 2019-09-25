import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import styles from "./styles";



import Swipeable from "react-native-gesture-handler/Swipeable";

export default function Presentational(props) {
  const {
    title,
    message,
    colorTitle,
    isVisible,
    closeAdvertising,
    fadeValue,
    swipeBackAdvertising
  } = props;

  renderBannerImage = () => (
    // simulando imagem do itau
    <View
      style={{
        backgroundColor: "#FF9B52",
        height: 70,
        width: 70,
        borderRadius: 10,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center"
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          height: 45,
          width: 45,
          borderRadius: 10
        }}
      ></View>
    </View>
  );

  renderTitleAndMessage = () => {
    const title = renderTitle();
    const message = renderMessage();

    return (
      <View style={styles.titleAndMessageArea}>
        {title}
        {message}
      </View>
    );
  };

  renderTitle = () => (
    <Text style={[styles.title, { color: colorTitle }]}>{title}</Text>
  );

  renderMessage = () => <Text style={styles.message}>{message}</Text>;

  renderCloseButton = () => (
    <Text style={{ fontSize: 18, color: "white", alignSelf: "center" }}>X</Text>
  );

  renderAdvertising = () => {
    const swipeCard = renderSwipeCard();

    return (
      <Animated.View
        style={{
          opacity: fadeValue
        }}
      >
        {swipeCard}
      </Animated.View>
    );
  };

  renderSwipeCard = () => {
    const button = renderCloseButton();
    const bannertAndTitleAndMessage = renderBannerAndTitleAndMessage();

    renderCloseAdvertising = (progress, dragX) => {
      return <View style={styles.closeAdvertisingArea}>{button}</View>;
    };
    return (
      <Swipeable
        friction={1}
        overshootRight={false}
        rightThreshold={45}
        renderRightActions={renderCloseAdvertising}
        onSwipeableOpen={closeAdvertising}
      >
        {bannertAndTitleAndMessage}
      </Swipeable>
    );
  };

  renderBannerAndTitleAndMessage = () => {
    const bannerImage = this.renderBannerImage();
    const titleAndMessage = this.renderTitleAndMessage();

    return (
      <Animated.View
        style={{ transform: [{ translateX: swipeBackAdvertising }] }}
      >
        <TouchableOpacity activeOpacity={0.9} style={styles.advertisingArea}>
          {bannerImage}
          {titleAndMessage}
        </TouchableOpacity>
      </Animated.View>
    );
  };

  renderContent = () => {
    const HasAdvertising = title;

    if (HasAdvertising && isVisible) return renderAdvertising();
    return null;
  };

  const content = renderContent();

  return <View style={styles.container}>{content}</View>;
}

Presentational.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  colorTitle: PropTypes.string
};

Presentational.defaultProps = {
  title: "",
  message: "",
  colorTitle: ""
};
