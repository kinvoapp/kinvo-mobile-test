import {moderateScale} from 'react-native-size-matters';
import {RadiusType} from '~/utils/types';

export default {
  smallRadius: `${moderateScale(4)}px`,
  mediumRadius: `${moderateScale(8)}px`,
  largeRadius: `${moderateScale(25)}px`,
  cardRadius: `${moderateScale(12)}px`,
  buttonRadius: `${moderateScale(30)}px`,
  textInputRadius: `${moderateScale(60)}px`,
} as RadiusType;
