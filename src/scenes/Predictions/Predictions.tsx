import React from 'react';
import { Header, If } from '~/components';
import { 
  Wrapper, 
  WrapperCards, 
  CardStyled, 
  WrapperSearch,
  ButtonSearch,
  Text,
  Content,
  Loading, 
  WrapperLoading
} from './styles';

type Data = {
  name: string;
  profitability: string;
  minimumValue: number;
  ticker: number;
}

type Props = {
  goBack?: () => void;
  handleOptionSearch: (name: string) => void;
  optionsSearch?: any;
  dataActions: Data[];
}

const Predictions: React.FC<Props> = ({
  goBack,
  handleOptionSearch, 
  optionsSearch,
  dataActions
}) => {

  return (
    <Wrapper>
      <Header title="Previdências" showIcon goBack={goBack} />

      <WrapperCards>
        <If condition={!dataActions || false}>
          <WrapperLoading>
            <Loading size="large" />
          </WrapperLoading>
        </If>

        <If condition={dataActions != undefined|| false}>
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

          <Content>
            {dataActions?.map((action, index) => {
              return <CardStyled key={index} action={action} showPredictions showButtonState />
            })}
          </Content>
        </If>
      </WrapperCards>
    </Wrapper>
  );
};

export default Predictions;
