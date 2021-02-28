import { configureStore } from '@reduxjs/toolkit'
import stocksReducer from './reducers/stocksReducer'
import fundsReducer from './reducers/fundsReducer'
import pensionsReducer from './reducers/pensionsReducer'
import Reactotron from '../ReactotronConfig'

const reducerSlices = {
	stocksReducer,
	fundsReducer,
	pensionsReducer
}

const store = configureStore({
	reducer: reducerSlices,
	enhancers: [Reactotron.createEnhancer()]
})

export default store
