import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';

import api from '../../services/api';
import {
  List,
  ProductName,
  Balance,
  InstitutionName,
  TextBalance,
  Equity,
  Profitability,
} from './styles';

interface ProductProsp {
  portfolioProductId: number;
  productName: string;
  productTypeId: number;
  financialInstitutionName: string;
  equity: number;
  profitability: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductProsp[] | null>(null);

  useEffect(() => {
    api
      .get('getProducts')
      .then(response => setProducts(response.data.data))
      .catch(erro => console.log(erro));
  }, []);

  return (
    <>
      <FlatList
        data={products}
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
    </>
  );
};

export default ProductList;
