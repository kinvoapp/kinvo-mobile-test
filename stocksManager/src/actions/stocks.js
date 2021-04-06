import api from '../services/api';
import deviceStorage from '../services/deviceStorage';
import apiUtils from '../services/apiUtils';

export const getStocks = () =>{

    return async (dispatch) => {
        return api({
            method: 'get',
            url: "stocks",
            headers: {
                "Accept": "application/json"
            },
            })  
            .then((response) => {
                dispatch(getStocksSuccess(response.data.data));
            })
            .catch((error) => {
                // Handle returned errors here
                //apiUtils.handleError(error);
                dispatch();
            });
    }
}


export const getStocksSuccess = (stocks) => {    
    return {
        type: 'GET_STOCKS',
        payload:{
            stocks
        }
    }
}

export const setFavoritedStock = (stockId) =>{

    return async (dispatch) => {
        return dispatch(setFavoritedStockSucess(stockId));
    }
}

export const setFavoritedStockSucess = (stockId) => {
    
    return {
        type: 'SET_STOCK_TO_FAVORITE',
        payload:{
            stockId
        }
    }
}