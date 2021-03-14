import { Dimensions } from "react-native";

export default function isIPhoneX() {
  const dim = Dimensions.get("window");

  return (
    Platform.OS === "ios" &&
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
}

function isIPhoneXSize(dim) {
  return dim.height == 812 || dim.width == 812;
}

function isIPhoneXrSize(dim) {
  return dim.height == 896 || dim.width == 896;
}
