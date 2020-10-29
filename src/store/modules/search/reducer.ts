import { Reducer } from 'redux';  
import { SearchState } from './types'

  

const INITIAL_STATE: SearchState = {
  data: []
}

const search: Reducer<SearchState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SEARCH_INPUT_VALUE' : {
      const { searchValue } = action.payload;
  
      return {
        ...state,
        data: 
          searchValue              
      };
      
    }
    default: {
      return state;
    }
  }
}


export default search;