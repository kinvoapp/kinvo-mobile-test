import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';
import { ProductContext, ProductProps } from '../../hooks/ProductContext';

import Search from '../Search';
import ErrorList from './ErrorList';
import LoadingList from './LoadingList';
import {
  List,
  ProductName,
  Balance,
  InstitutionName,
  TextBalance,
  Equity,
  Container,
  BarColor,
} from './styles';

const ProductList: React.FC = () => {
  const products: ProductProps = useContext(ProductContext);
  const [searchFilter, setSearchFilter] = useState('');

  const filteredProducts = products.products?.filter(product => {
    return product.productName
      .toLowerCase()
      .includes(searchFilter.toLowerCase())
      ? product.productName.toLowerCase().includes(searchFilter.toLowerCase())
      : product.financialInstitutionName
          .toLowerCase()
          .includes(searchFilter.toLowerCase());
  });

  if (products.isLoading) return <LoadingList />;
  if (products.error) return <ErrorList />;
  return (
    <Container>
      <Search searchFilter={searchFilter} setSearchFilter={setSearchFilter} />

      <FlatList
        data={filteredProducts}
        keyExtractor={product => product.portfolioProductId.toString()}
        renderItem={({ item: product }) => (
          <List>
            <InstitutionName productTypeId={product.productTypeId}>
              {product.financialInstitutionName}
            </InstitutionName>

            <BarColor productTypeId={product.productTypeId}>
              <ProductName>{product.productName}</ProductName>
            </BarColor>

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
                renderText={value => (
                  <Equity productTypeId={product.productTypeId}>{value}</Equity>
                )}
              />
              <NumberFormat
                value={product.profitability}
                displayType="text"
                suffix="%"
                renderText={value => (
                  <Equity productTypeId={product.productTypeId}>{value}</Equity>
                )}
              />
            </Balance>
          </List>
        )}
      />
    </Container>
  );
};

export default ProductList;
