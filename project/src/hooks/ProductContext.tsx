import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export type ProductProps = {
  error?: boolean;
  isLoading?: boolean;
  products?: [
    {
      equity: number;
      financialInstitutionName: string;
      portfolioProductId: number;
      productName: string;
      productTypeId: number;
      profitability: number;
    },
  ];
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
