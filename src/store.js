import { configureStore } from '@reduxjs/toolkit'
import stocksReducer from './reducers/stocksReducer'
import fundsReducer from './reducers/fundsReducer'
import pensionsReducer from './reducers/pensionsReducer'

const reducerSlices = {
	stocksReducer,
	fundsReducer,
	pensionsReducer
}

const store = configureStore({
	reducer: reducerSlices
})

export default store
