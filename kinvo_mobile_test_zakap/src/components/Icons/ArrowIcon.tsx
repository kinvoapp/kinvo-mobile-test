import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from "react-native-svg"

interface ArrowIconProps {
    color: string,
    style?: StyleProp<ViewStyle>  
}

export const ArrowIcon = ({color, style} : ArrowIconProps) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={8.382}
      height={8.253}
      style={style}
    >
      <Path
        d="M.148 4.407a.506.506 0 0 0 .716 0l2.818-2.821v6.161a.506.506 0 1 0 1.012 0v-6.16l2.824 2.82a.506.506 0 1 0 .716-.716L4.791.253a.851.851 0 0 0-1.2 0L.148 3.691a.506.506 0 0 0 0 .716Z"
        fill={color}
        opacity={0.5}
      />
    </Svg>
)