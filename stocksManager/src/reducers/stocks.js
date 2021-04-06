import { CompareItemsByName, SortByFavorites } from '../services/utils';


export default function stocks(state=[], action) {

    switch (action.type) {
        case 'GET_STOCKS':
            let sorted = action.payload.stocks;
            sorted.sort(CompareItemsByName);
            return sorted
        case 'SET_STOCK_TO_FAVORITE':
            const favoriteIndex = state.findIndex(e => e.id == action.payload.stockId);
            let favoriteStock = state[favoriteIndex];
            favoriteStock.isFavorite = !favoriteStock.isFavorite;

            let stockList = [
                ...state.slice(0,favoriteIndex),
                favoriteStock,
                ...state.slice(favoriteIndex + 1),
            ]
            stockListSorted = SortByFavorites(stockList);
        return stockListSorted;
        default:
            return state;
    }
}