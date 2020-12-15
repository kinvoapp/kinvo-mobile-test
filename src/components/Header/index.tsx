import React from 'react';
import If from '../If';
import {Wrapper, TouchableStyled, IconBack, Title} from './styles';

type Props = {
  showIcon?: boolean;
  title: string;
  goBack?: () => void;
};

const Header: React.FC<Props> = ({showIcon, title, goBack}) => {
  return (
    <Wrapper>
      <If condition={showIcon || false}>
        <TouchableStyled onPress={goBack}>
          <IconBack />
        </TouchableStyled>
      </If>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Header;
