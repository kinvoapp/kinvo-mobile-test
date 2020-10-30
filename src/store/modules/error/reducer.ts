import { Reducer } from 'redux'; 

const INITIAL_STATE = {
  data: false,
}



const err: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ERROR' : {  
      const gotError = action.payload;

      return { data : gotError }
    }
    default: {
      return state;
    }
  }
}

export default err;