import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPensions } from '../api'
import handleRequestError from '../utils/handleRequestError'

export const fetchPensions = createAsyncThunk(
	'fetchPensions',
	async (arg, { rejectWithValue }) => {
		try {
			const response = await getPensions()
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)
