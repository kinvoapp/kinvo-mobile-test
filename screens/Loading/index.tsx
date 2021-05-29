import React, { FC } from "react";
import { Image, Text, View } from "react-native";
import { LoadingScreen } from "./style";

const Loading: FC = () => {
  return (
    <LoadingScreen>
      <Image source={require('../../assets/icons/loadingIcon.png')}/>
    </LoadingScreen>
  )
};

export default Loading;
