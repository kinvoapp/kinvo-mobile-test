import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api';
import { ProductName } from './styles';

interface ProductProsp {
  portfolioProductId: number;
  productName: string;
  productTypeId: number;
  financialInstitutionName: string;
  equity: number;
  profitability: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductProsp[]>([]);

  useEffect(() => {
    api.get('getProducts').then(response => setProducts(response.data.data));
  }, []);

  return (
    <>
      <FlatList
        data={products}
        keyExtractor={product => product.portfolioProductId.toString()}
        renderItem={({ item: product }) => (
          <>
            <ProductName>{product.productName}</ProductName>
          </>
        )}
      />
    </>
  );
};

export default ProductList;
