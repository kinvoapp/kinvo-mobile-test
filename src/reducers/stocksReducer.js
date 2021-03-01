import { createReducer } from '@reduxjs/toolkit'
import { fetchStocks } from '../actions/stocksActions'

const initialState = {
	isPending: false,
	stocks: [],
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

			return {
				...state,
				isPending: false,
				stocks: action.payload.data,
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
		}
	},
	[],
	(state) => state
)

export default stocksReducer
