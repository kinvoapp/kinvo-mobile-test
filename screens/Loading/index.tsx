import React, { FC } from "react";
import LoadIcon from "../../assets/icons/loadIcon.svg";
import { LoadingScreen } from "./style";

const Loading: FC = () => {
  return (
    <LoadingScreen>
      <LoadIcon/>
    </LoadingScreen>
  )
};

export default Loading;
