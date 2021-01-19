import React from 'react';

import { HeaderHome, TextHeader, ContainerHeaderBack} from './styles';
import BackButton from '../../components/BackButton/index';

interface Header {
  name: string;
}

const Header: React.FC<Header> = ({name}) => {
  return (
      <HeaderHome>
        <ContainerHeaderBack>
          <BackButton />
        <TextHeader>{name}</TextHeader>
        </ContainerHeaderBack>
      </HeaderHome>
  );
};
export default Header;