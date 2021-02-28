import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { reactotronRedux } from 'reactotron-redux'
import app from './app.json'

if (__DEV__) {
	Reactotron.setAsyncStorageHandler(AsyncStorage)
		.configure({ name: app.name })
		.useReactNative()
		.use(reactotronRedux())
		.connect()
}

export default Reactotron
