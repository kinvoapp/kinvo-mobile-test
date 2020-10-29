import { Reducer } from 'redux'; 

const INITIAL_STATE = {
  data: true,
}



const loading: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADING_DATA' : {  
      const isLoading  = action.payload;

      return { data : isLoading }
    }
    default: {
      return state;
    }
  }
}

export default loading;