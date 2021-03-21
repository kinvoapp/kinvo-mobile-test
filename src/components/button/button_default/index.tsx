import React from 'react';
import Colors from '../../../resources/colors';
import {Button, Text} from './styles';

interface IkinButton {
  title: string;
  color?: string;
  onPress?: Function;
}
export default function KinButtonDefault({
  title,
  onPress,
  color = Colors.primary,
}: IkinButton): JSX.Element {
  const handleButton = (): void => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <Button
      activeOpacity={0.6}
      underlayColor={color}
      onPress={() => handleButton()}>
      <Text>{title}</Text>
    </Button>
  );
}
