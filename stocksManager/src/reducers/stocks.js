import { compareStocks, favoritesFirst } from '../services/utils';


export default function stocks(state=[], action) {

    switch (action.type) {
        case 'GET_STOCKS':
            console.log(action);
            let sorted = action.payload.stocks;
            sorted.sort(compareStocks);
            console.log(sorted)
            return sorted
        case 'UPDATE_STOCK_FAVORITE':
            console.log(action)
            const is = state.findIndex(e => e.id == action.payload.stockId);
            let updated = state[is];
            updated.isFavorite = !updated.isFavorite;
            //console.log(state);

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