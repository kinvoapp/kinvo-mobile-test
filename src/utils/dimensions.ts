import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const HEIGHT = height;
export const WIDTH = width;

export const iPhoneXLike = height >= 812 || width >= 812 || height >= 896 || width >= 896;
