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
		[fetchStocks.fulfilled]: (state, action) => {
			const payload = action.payload
			if (payload.error) {
				return {
					...state,
					isPending: false,
					error: payload.error
				}
			}
			return {
				...state,
				isPending: false,
				stocks: payload.data,
				error: null
			}
		},
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
