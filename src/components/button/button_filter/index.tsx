import React, {useState} from 'react';
import Colors from '../../../resources/colors';
import {Button, Text} from './styles';

interface IkinButton {
  title: string;
  color?: string;
  isHandle?: boolean;
  onPress?: Function;
}
export default function KinButtonFilter({
  title,
  onPress,
  isHandle = false,
  color = Colors.primary,
}: IkinButton): JSX.Element {
  const [handle, setHandle] = useState(isHandle);
  const handleButton = (): void => {
    setHandle(!handle);
    if (onPress) {
      onPress();
    }
  };
  return (
    <Button
      isHandle={handle}
      activeOpacity={0.6}
      underlayColor={handle ? color : '#fff'}
      onPress={() => handleButton()}>
      <Text isHandle={handle}>{title}</Text>
    </Button>
  );
}
