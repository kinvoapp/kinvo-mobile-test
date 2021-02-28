import { createAsyncThunk } from '@reduxjs/toolkit'
import { getFunds } from '../api'
import handleRequestError from '../utils/handleRequestError'

export const fetchFunds = createAsyncThunk(
	'fetchFunds',
	async (arg, { rejectWithValue }) => {
		try {
			const response = await getFunds()
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)
