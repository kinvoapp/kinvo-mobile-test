import React from 'react';
import KinButtonDefault from '../button/button_default';
import {Group, Title, Subtitle} from './styles';

interface IkinGroupError {
  title?: string;
  subtitle?: string;
  onPress?: Function;
}

export default function KinGroupError({
  title,
  subtitle,
  onPress,
}: IkinGroupError) {
  return (
    <Group>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {onPress && (
        <KinButtonDefault title="TENTAR NOVAMENTE" onPress={() => onPress()} />
      )}
    </Group>
  );
}
