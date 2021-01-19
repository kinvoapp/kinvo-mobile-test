import React from 'react';

import { HeaderHome, TextHeader, ContainerHeaderBack} from './styles';
import BackButton from '../../components/BackButton/index';


const Header: React.FC = ({name}) => {
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