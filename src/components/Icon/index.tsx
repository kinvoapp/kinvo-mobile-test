import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Color } from '~/styles/colors';
import icons from '~/styles/icons';

export type IconName = keyof typeof icons;

interface IconProps extends SvgProps {
  name: IconName;
  color: Color;
  size?: number;
  style?: StyleProp<ViewStyle>;
  height?: number;
  width?: number;
}

const Icon = ({ name, size, color, ...rest }: IconProps) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      {...rest}
      fill={color}
      height={size || 24}
      width={size || 24}
    />
  );
};

export default Icon;
