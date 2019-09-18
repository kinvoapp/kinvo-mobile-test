import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  // Border
  border: 1,
  borderSmall: 0.5,

  // Min touch target size for usability
  touchTargetSize: 50,

  // Space
  space05X: 5,
  spaceX: 10,
  space15X: 15,
  space2X: 20,
  space3X: 30,
  space4X: 40,

  // Radius
  radiusX: 10,
  radius2X: 20,
  radius3X: 30,

  // Button
  buttonHeight: 50,

  // Custom
  productsDistributionBarHeight: 30,
  notificationCardHeight: 56,
  bottomNavigationBarHeight: 65,
  statementListItemHeight: 80,
};
