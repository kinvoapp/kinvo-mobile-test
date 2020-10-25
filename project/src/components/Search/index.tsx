import React from 'react';
import { SearchBar } from 'react-native-elements';

interface SearchProps extends React.ComponentState {
  searchFilter: string;
}

const Search = ({
  searchFilter,
  setSearchFilter,
}: SearchProps): JSX.Element => {
  return (
    <SearchBar
      placeholder="Buscar por nome..."
      round
      onChangeText={text => setSearchFilter(text)}
      value={searchFilter}
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
