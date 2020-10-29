import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import api from '../../../services/api';
import { useDispatch } from 'react-redux';
import { Products } from '../../../store/modules/search/types';
import { searchInputValue } from '../../../store/modules/search/actions';
import { isLoading } from '../../../store/modules/loading/actions';

export default function Search() {

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [fullData, setFullData] = useState<Products[]>([]); 
  const [searchResults, setSearchResults] = useState<Products[]>([]);
  const dispatch = useDispatch();


  useEffect(()=>{
    
    api.get('').then(response =>{ 

      const res = response.data;
    
      
      setFullData(res.data);  
      dispatch(searchInputValue(fullData));
      dispatch(isLoading(false));
      
    }).catch(err =>{

    });

    const filteredData = fullData.filter(searchValue =>
      searchValue.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
       
    setSearchResults(filteredData);
    dispatch(searchInputValue(searchResults));
    
  }, [fullData, searchTerm])

 

  return (
    
    <SearchBar 
      searchIcon={{size: 40}}
      inputContainerStyle={styles.searchInput}
      containerStyle={styles.inputContainer}
      maxLength={20}
      value={searchTerm}
      onChangeText={text => setSearchTerm(text)} 
    />
  )
}

const styles = StyleSheet.create({

  inputContainer: {
    paddingTop: 24,
    justifyContent: 'center',
    backgroundColor: '#F5F8FA',
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },

  searchInput: {

    backgroundColor: '#fff',

    borderRadius: 30,
    height: 56,
    marginHorizontal: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
    
  },

})
