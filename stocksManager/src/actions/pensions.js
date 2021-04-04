import api from '../services/api';
import deviceStorage from '../services/deviceStorage';
import apiUtils from '../services/apiUtils';

export const getPensions = () =>{

    return async (dispatch) => {
        return api({
            method: 'get',
            url: "pension",
            headers: {
                "Accept": "application/json"
            },
            })  
            .then((response) => {
                dispatch(getPensionsSuccess(response.data.data));
            })
            .catch((error) => {
                // Handle returned errors here
                //apiUtils.handleError(error);
                dispatch();
            });
    }
}


export const getPensionsSuccess = (pensions) => {    
    return {
        type: 'GET_PENSIONS',
        payload:{
            pensions
        }
    }
}