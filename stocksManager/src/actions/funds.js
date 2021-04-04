import api from '../services/api';
import deviceStorage from '../services/deviceStorage';
import apiUtils from '../services/apiUtils';

export const getFunds = () =>{

    return async (dispatch) => {
        return api({
            method: 'get',
            url: "funds",
            headers: {
                "Accept": "application/json"
            },
            })  
            .then((response) => {
                dispatch(getFundsSuccess(response.data.data));
            })
            .catch((error) => {
                // Handle returned errors here
                apiUtils.handleError(error);
                dispatch();
            });
    }
}


export const getFundsSuccess = (funds) => {    
    return {
        type: 'GET_FUNDS',
        payload:{
            funds
        }
    }
}