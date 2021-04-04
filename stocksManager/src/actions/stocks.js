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
                apiUtils.handleError(error);
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

export const updateFavorites = (stockId) =>{

    return async (dispatch) => {
        return dispatch(updateStockFavorite(stockId));
    }
}

export const updateStockFavorite = (stockId) => {
    
    return {
        type: 'UPDATE_STOCK_FAVORITE',
        payload:{
            stockId
        }
    }
}