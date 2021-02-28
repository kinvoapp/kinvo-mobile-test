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
		[fetchStocks.pending]: (state) => ({
			...state,
			isPending: true,
			error: null
		}),
		[fetchStocks.fulfilled]: (state, action) => ({
			...state,
			isPending: false,
			stocks: action.payload.data,
			error: null
		}),
		[fetchStocks.rejected]: (state, action) => ({
			...state,
			isPending: false,
			error: action.payload
		})
	},
	[],
	(state) => state
)

export default stocksReducer
