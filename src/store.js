import { configureStore } from '@reduxjs/toolkit'
import stocksReducer from './reducers/stocksReducer'

const reducerSlices = {
	stocksReducer
}

const store = configureStore({
	reducer: reducerSlices
})

export default store
