import React from 'react';
import { Header, If } from '~/components';
import { 
  Wrapper, 
  WrapperCards, 
  CardStyled, 
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
  dataActions: Data[];
}

const Actions: React.FC<Props> = ({goBack, dataActions}) => {
  return (
    <Wrapper>
      <Header title="Ações" showIcon goBack={goBack} />
      <Content>
        <If condition={!dataActions || false}>
          <WrapperLoading>
            <Loading size="large" />
          </WrapperLoading>
        </If>

        <If condition={dataActions != undefined|| false}>
          <WrapperCards showsVerticalScrollIndicator={false}>
            {dataActions?.map((action, index) => {
              return <CardStyled key={index} action={action} showIconHeart />
            })}
            </WrapperCards>
        </If>
      </Content>
    </Wrapper>
  );
};

export default Actions;
