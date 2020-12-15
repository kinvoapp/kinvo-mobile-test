import React from 'react';
import { Header } from '~/components';
import { 
  Wrapper, 
  WrapperCards, 
  CardStyled, 
  WrapperSearch,
  ButtonSearch,
  Text
} from './styles';

type Props = {
  goBack?: () => void;
  handleOptionSearch: (name: string) => void;
  optionsSearch?: any;
}

const Predictions: React.FC<Props> = ({goBack, handleOptionSearch, optionsSearch}) => {
  return (
    <Wrapper>
      <Header title="Previdências" showIcon goBack={goBack} />

      <WrapperCards>
      <WrapperSearch>
        {optionsSearch.items.map(item => (
            <ButtonSearch
              onPress={() => handleOptionSearch(item)}
              key={item}
              active={optionsSearch.active === item}
            >
              <Text active={optionsSearch.active === item}>{item}</Text>
            </ButtonSearch>
          ))}
      </WrapperSearch>

      {/* <ScrollView> */}
        <CardStyled showPredictions showButtonState />
      {/* </ScrollView> */}
      </WrapperCards>
    </Wrapper>
  );
};

export default Predictions;
