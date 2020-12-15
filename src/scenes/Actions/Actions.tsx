import React from 'react';
import { Header } from '~/components';
import { Wrapper, WrapperCards, CardStyled } from './styles';

type Props = {
  goBack?: () => void;
  handleIconHeartState: () => void;
}

const Actions: React.FC<Props> = ({goBack, handleIconHeartState}) => {
  return (
    <Wrapper>
      <Header title="Ações" showIcon goBack={goBack} />
      <WrapperCards>
        <CardStyled  iconHeartState={handleIconHeartState} />
      </WrapperCards>
    </Wrapper>
  );
};

export default Actions;
