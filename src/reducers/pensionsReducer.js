import { createReducer } from '@reduxjs/toolkit'
import { fetchPensions } from '../actions/pensionsActions'

const initialState = {
	isPending: false,
	pensions: [],
	error: null
}

const pensionsReducer = createReducer(
	initialState,
	{
		[fetchPensions.pending]: (state) => {
			if (__DEV__) console.log(fetchPensions.pending.toString())

			return {
				...state,
				isPending: true,
				error: null
			}
		},
		[fetchPensions.fulfilled]: (state, action) => {
			if (__DEV__)
				console.log(fetchPensions.fulfilled.toString(), action.payload)

			return {
				...state,
				isPending: false,
				pensions: action.payload.data,
				error: null
			}
		},
		[fetchPensions.rejected]: (state, action) => {
			if (__DEV__)
				console.log(fetchPensions.rejected.toString(), action.payload)

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

export default pensionsReducer
