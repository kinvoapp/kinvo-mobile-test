import React from 'react'
import { SafeAreaView, View, Text, StatusBar } from 'react-native'

function App() {
	return (
		<>
			<StatusBar barStyle='dark-content' />
			<SafeAreaView>
				<View>
					<Text>Hello, World!</Text>
				</View>
			</SafeAreaView>
		</>
	)
}

export default App
