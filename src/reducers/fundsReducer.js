import { createReducer } from '@reduxjs/toolkit'
import { fetchFunds } from '../actions/fundsActions'
import sortItemsAlphabetically from '../utils/sortItemsAlphabetically'

const initialState = {
	isPending: false,
	funds: [],
	error: null
}

const fundsReducer = createReducer(
	initialState,
	{
		[fetchFunds.pending]: (state) => {
			if (__DEV__) console.log(fetchFunds.pending.toString())

			return {
				...state,
				isPending: true,
				error: null
			}
		},
		[fetchFunds.fulfilled]: (state, action) => {
			if (__DEV__)
				console.log(fetchFunds.fulfilled.toString(), action.payload)

			const funds = action.payload.data
			funds.sort(sortItemsAlphabetically)

			return {
				...state,
				isPending: false,
				funds,
				error: null
			}
		},
		[fetchFunds.rejected]: (state, action) => {
			if (__DEV__)
				console.log(fetchFunds.rejected.toString(), action.payload)

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

export default fundsReducer
