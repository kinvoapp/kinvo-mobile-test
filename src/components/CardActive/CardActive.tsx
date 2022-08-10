import React from 'react';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { CardBase } from '../CardBase/CardBase';
import { TextBase } from '../TextBase/TextBase';
import { IconAction, IconPensionMoney, IconWalletSmall } from '~assets/icons';

import * as Component from './CardActive.styles';

const iconsComponent: IconComponentType = {
  IconAction: <IconAction />,
  IconPensionMoney: <IconPensionMoney />,
  IconWalletSmall: <IconWalletSmall />,
};

export type IconName = 'IconAction' | 'IconPensionMoney' | 'IconWalletSmall';

type IconComponentType = {
  [keyof in IconName]: React.ReactElement<SvgProps>;
};

type IconType<T extends IconName> = {
  [key in keyof T]: React.FC<SvgProps>;
};

export type CardActiveProps = {
  title: string;
  description: string;
  icon: IconType<IconName>;
  isNew: boolean;
} & TouchableOpacityProps;

export function CardActive({
  title,
  description,
  icon,
  isNew,
  ...rest
}: CardActiveProps) {
  return (
    <CardBase {...rest}>
      <Component.CircleIcon>{iconsComponent[icon]}</Component.CircleIcon>

      <Component.Content>
        <TextBase weight="Bold" font="Medium" size="default">
          {title}
        </TextBase>

        <TextBase
          font="Bold"
          weight="SemiBold"
          color="secondary"
          style={styled.description}>
          {description}
        </TextBase>
      </Component.Content>

      {isNew ? (
        <Component.New>
          <TextBase weight="Light" font="Light" color="default">
            Novo
          </TextBase>
        </Component.New>
      ) : null}
    </CardBase>
  );
}

const styled = StyleSheet.create({
  description: { marginTop: 5 },
});
