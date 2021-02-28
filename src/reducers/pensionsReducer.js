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
		[fetchPensions.pending]: (state) => ({
			...state,
			isPending: true,
			error: null
		}),
		[fetchPensions.fulfilled]: (state, action) => ({
			...state,
			isPending: false,
			pensions: action.payload.data,
			error: null
		}),
		[fetchPensions.rejected]: (state, action) => ({
			...state,
			isPending: false,
			error: action.payload
		})
	},
	[],
	(state) => state
)

export default pensionsReducer
