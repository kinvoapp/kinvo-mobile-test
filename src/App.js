import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import Routes from './Routes'
import appTheme from './utils/appTheme'

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<Routes />
		</ThemeProvider>
	)
}

export default App
