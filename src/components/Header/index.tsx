import React from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';
import { Heading1 } from '~/styles/typography';
import Icon from '../Icon';
import {
  ButtonContainer,
  Content,
  HeaderContainer,
  TitleContent,
} from './styles';

interface HeaderProps extends NativeStackHeaderProps {
  hideArrow?: boolean;
}

const Header = ({ navigation, options, hideArrow = false }: HeaderProps) => {
  const { colors } = useTheme();

  const { goBack } = navigation;
  const { title } = options;

  return (
    <HeaderContainer>
      <Content>
        {!hideArrow && (
          <ButtonContainer
            activeOpacity={0.5}
            hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
            onPress={() => goBack()}
          >
            <Icon name="goBack" color={colors.white} size={12} />
          </ButtonContainer>
        )}

        <TitleContent>
          <Heading1>{title}</Heading1>
        </TitleContent>
      </Content>
    </HeaderContainer>
  );
};

export default Header;
