import { configureStore } from '@reduxjs/toolkit'
import stocksReducer from './reducers/stocksReducer'
import fundsReducer from './reducers/fundsReducer'

const reducerSlices = {
	stocksReducer,
	fundsReducer
}

const store = configureStore({
	reducer: reducerSlices
})

export default store
