import { compareStocks, favoritesFirst } from '../services/utils';


export default function stocks(state=[], action) {

    switch (action.type) {
        case 'GET_STOCKS':
            let sorted = action.payload.stocks;
            sorted.sort(compareStocks);
            return sorted
        case 'UPDATE_STOCK_FAVORITE':
            const is = state.findIndex(e => e.id == action.payload.stockId);
            let updated = state[is];
            updated.isFavorite = !updated.isFavorite;

            let newState = [
                ...state.slice(0,is),
                updated,
                ...state.slice(is + 1),
            ]
            newStateSorted = favoritesFirst(newState);
        return newStateSorted;
        default:
            return state;
    }
}