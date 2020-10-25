import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export type ProductProps = {
  portfolioProductId?: number;
  productName?: string;
  productTypeId?: number;
  financialInstitutionName?: string;
  equity?: number;
  profitability?: number;
  isLoading?: boolean;
  error?: boolean;
};

export const ProductContext = createContext({});

export const ProductStorage: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api
      .get('getProducts')
      .then(response => {
        setProducts(response.data.data);
        setIsLoading(false);
        setError(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ isLoading, products, error }}>
      {children}
    </ProductContext.Provider>
  );
};
