import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import Routes from './Routes'
import appTheme from './utils/appTheme'
import store from './store'

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={appTheme}>
				<Routes />
			</ThemeProvider>
		</Provider>
	)
}

export default App
