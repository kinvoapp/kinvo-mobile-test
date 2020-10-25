import React, { useContext } from 'react';
import { SearchBar } from 'react-native-elements';
import { ProductContext, ProductProps } from '../../hooks/ProductContext';

const Search: React.FC = () => {
  const products: ProductProps = useContext(ProductContext);

  return (
    <SearchBar
      placeholder="Buscar por nome..."
      round
      containerStyle={{
        borderBottomWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#f4f8fb',
        borderColor: '#f4f8fb',
        height: 85,
        justifyContent: 'center',
      }}
      inputStyle={{ backgroundColor: '#fff' }}
      inputContainerStyle={{
        backgroundColor: '#fff',
        height: 40,
        alignItems: 'center',
        borderColor: '#ccc',
      }}
    />
  );
};

export default Search;
