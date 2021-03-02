import { createReducer } from '@reduxjs/toolkit'
import {
	fetchStocks,
	addFavoriteStockId,
	removeFavoriteStockId
} from '../actions/stocksActions'

const initialState = {
	isPending: false,
	stocks: [],
	favorites: [],
	error: null
}

const stocksReducer = createReducer(
	initialState,
	{
		[fetchStocks.pending]: (state) => {
			if (__DEV__) console.log(fetchStocks.pending.toString())

			return {
				...state,
				isPending: true,
				error: null
			}
		},
		[fetchStocks.fulfilled]: (state, action) => {
			if (__DEV__)
				console.log(fetchStocks.fulfilled.toString(), action.payload)

			const stocks = action.payload.data
			const favorites = new Set(state.favorites)
			sortStocks(stocks, favorites)

			return {
				...state,
				isPending: false,
				stocks,
				error: null
			}
		},
		[fetchStocks.rejected]: (state, action) => {
			if (__DEV__)
				console.log(fetchStocks.rejected.toString(), action.payload)

			return {
				...state,
				isPending: false,
				error: action.payload
			}
		},
		[addFavoriteStockId]: (state, action) => {
			const stocks = state.stocks.slice()
			const favorites = new Set(state.favorites)

			favorites.add(action.payload)
			sortStocks(stocks, favorites)

			return {
				...state,
				stocks,
				favorites: Array.from(favorites)
			}
		},
		[removeFavoriteStockId]: (state, action) => {
			const stocks = state.stocks.slice()
			const favorites = new Set(state.favorites)

			favorites.delete(action.payload)
			sortStocks(stocks, favorites)

			return {
				...state,
				stocks,
				favorites: Array.from(favorites)
			}
		}
	},
	[],
	(state) => state
)

function sortStocks(stocks, favorites) {
	stocks.sort((stock1, stock2) => {
		if (favorites.has(stock1.id)) return -1
		else if (favorites.has(stock2.id)) return 1
		return 0
	})
	stocks.sort((stock1, stock2) => {
		if (favorites.has(stock1.id) && favorites.has(stock2.id)) {
			return sortStocksAlphabetically(stock1, stock2)
		}
		return 0
	})
	stocks.sort((stock1, stock2) => {
		if (!favorites.has(stock1.id) && !favorites.has(stock2.id)) {
			return sortStocksAlphabetically(stock1, stock2)
		}
		return 0
	})
}

function sortStocksAlphabetically(stock1, stock2) {
	const stock1Name = stock1.name.toUpperCase()
	const stock2Name = stock2.name.toUpperCase()
	if (stock1Name < stock2Name) return -1
	else if (stock1Name > stock2Name) return 1
	return 0
}

export default stocksReducer
