import React, {FC} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Button} from './styles';

const Touchable: FC<TouchableOpacityProps> = ({children, ...rest}) => {
  return (
    <Button {...rest} activeOpacity={0.9}>
      {children}
    </Button>
  );
};

export default Touchable;
