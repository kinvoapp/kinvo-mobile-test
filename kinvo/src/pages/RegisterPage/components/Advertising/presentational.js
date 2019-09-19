import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Presentational(props) {
  const { title, message, colorTitle } = props;

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

  renderAdvertising = () => {
    const bannerImage = this.renderBannerImage();
    const titleAndMessage = this.renderTitleAndMessage();

    return (
      <TouchableOpacity style={styles.advertisingArea}>
        {bannerImage}
        {titleAndMessage}
      </TouchableOpacity>
    );
  };

  renderContent = () => {
    const IsEmptyAdvertising= title === ''
    if(IsEmptyAdvertising)
    return null

    return renderAdvertising();
  };

  const content = renderContent();

  return <View style={styles.container}>{content}</View>;
}

Presentational.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  colorTitle: PropTypes.string,  
};

Presentational.defaultProps = {
  title: '',
  message: '',
  colorTitle: '', 
};