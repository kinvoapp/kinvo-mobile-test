import { createReducer } from '@reduxjs/toolkit'
import { fetchFunds } from '../actions/fundsActions'

const initialState = {
	isPending: false,
	funds: [],
	error: null
}

const fundsReducer = createReducer(
	initialState,
	{
		[fetchFunds.pending]: (state) => ({
			...state,
			isPending: true,
			error: null
		}),
		[fetchFunds.fulfilled]: (state, action) => ({
			...state,
			isPending: false,
			funds: action.payload.data,
			error: null
		}),
		[fetchFunds.rejected]: (state, action) => ({
			...state,
			isPending: false,
			error: action.payload
		})
	},
	[],
	(state) => state
)

export default fundsReducer
