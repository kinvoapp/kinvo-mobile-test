import React, { useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';
import { ProductContext, ProductProps } from '../../hooks/ProductContext';

import ErrorList from './ErrorList';
import LoadingList from './LoadingList';
import {
  List,
  ProductName,
  Balance,
  InstitutionName,
  TextBalance,
  Equity,
  Profitability,
  Container,
} from './styles';

const ProductList: React.FC = () => {
  const products: ProductProps = useContext(ProductContext);

  if (products.isLoading) return <LoadingList />;
  if (products.error) return <ErrorList />;
  return (
    <Container>
      <FlatList
        data={products.products}
        keyExtractor={product => product.portfolioProductId.toString()}
        renderItem={({ item: product }) => (
          <List>
            <InstitutionName>
              {product.financialInstitutionName}
            </InstitutionName>

            <ProductName>{product.productName}</ProductName>

            <Balance>
              <TextBalance>SALDO ATUAL</TextBalance>
              <TextBalance>RENTABILIDADE</TextBalance>
            </Balance>
            <Balance>
              <NumberFormat
                value={product.equity}
                displayType="text"
                thousandSeparator
                prefix="R$"
                renderText={value => <Equity>{value}</Equity>}
              />
              <NumberFormat
                value={product.profitability}
                displayType="text"
                suffix="%"
                renderText={value => <Profitability>{value}</Profitability>}
              />
            </Balance>
          </List>
        )}
      />
    </Container>
  );
};

export default ProductList;
