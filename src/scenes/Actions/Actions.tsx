import React, {useState} from 'react';
import { Header } from '~/components';
import { Wrapper, WrapperCards, CardStyled } from './styles';

type Props = {
  goBack?: () => void;
  handleIconHeartState: () => void;
}

const Actions: React.FC<Props> = ({goBack}) => {
  const [showIconHeart, setShowIconHeart] = useState(false)

  const handleIconHeart =() => {
    setShowIconHeart(!showIconHeart)
    console.log('foi até aqui')
    console.log(showIconHeart)
  }
  return (
    <Wrapper>
      <Header title="Ações" showIcon goBack={goBack} />
      <WrapperCards>
        <CardStyled  handleIconHeart={handleIconHeart} />
      </WrapperCards>
    </Wrapper>
  );
};

export default Actions;
