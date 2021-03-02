import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { getStocks } from '../api'
import handleRequestError from '../utils/handleRequestError'

export const fetchStocks = createAsyncThunk(
	'fetchStocks',
	async (arg, { rejectWithValue }) => {
		try {
			const response = await getStocks()
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)

export const addFavoriteStockId = createAction('addFavoriteStockId')

export const removeFavoriteStockId = createAction('removeFavoriteStockId')
