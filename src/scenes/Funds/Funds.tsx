import React from 'react';
import { Header, If } from '~/components';
import { 
  Wrapper, 
  WrapperCards, 
  Content, 
  CardStyled, 
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
  dataActions: Data[];
}

const Funds: React.FC<Props> = ({goBack, dataActions}) => {
  return (
    <Wrapper>
      <Header title="Fundos" showIcon goBack={goBack} />
      <Content>
        <If condition={!dataActions || false}>
          <WrapperLoading>
            <Loading size="large" />
          </WrapperLoading>
        </If>

        <If condition={dataActions != undefined|| false}>
          <WrapperCards showsVerticalScrollIndicator={false}>
            {dataActions?.map((action, index) => {
              return <CardStyled key={index} action={action} showClassification  valueStar={4} />
            })}
          </WrapperCards>
        </If>
      </Content>
    </Wrapper>
  );
};

export default Funds;
