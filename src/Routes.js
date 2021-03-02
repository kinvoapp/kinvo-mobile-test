import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import StocksScreen from './screens/StocksScreen'
import FundsScreen from './screens/FundsScreen'
import PensionsScreen from './screens/PensionsScreen'
import { HOME, STOCKS, FUNDS, PENSIONS } from './utils/consts/routeNames'
import {
	HOME_SCREEN_TITLE,
	STOCKS_SCREEN_TITLE,
	FUNDS_SCREEN_TITLE,
	PENSIONS_SCREEN_TITLE
} from './utils/consts/screenTitles'
import GoBack from './assets/go-back.svg'

const Stack = createStackNavigator()

function Routes() {
	const theme = useContext(ThemeContext)

	return (
		<NavigationContainer>
			<StatusBar
				barStyle='dark-content'
				backgroundColor={theme.statusBarColor}
			/>
			<Stack.Navigator
				initialRouteName={HOME}
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.headerColor,
						height: 100
					},
					headerTintColor: theme.headerTintColor,
					headerTitleStyle: {
						fontSize: 20,
						fontFamily: theme.primaryFontFamily,
						fontWeight: 'bold'
					},
					headerBackImage: () => <GoBack />,
					headerLeftContainerStyle: {
						paddingStart: 8
					},
					headerBackTitleVisible: false
				}}>
				<Stack.Screen
					name={HOME}
					component={HomeScreen}
					options={{
						title: HOME_SCREEN_TITLE
					}}
				/>
				<Stack.Screen
					name={STOCKS}
					component={StocksScreen}
					options={{
						title: STOCKS_SCREEN_TITLE
					}}
				/>
				<Stack.Screen
					name={FUNDS}
					component={FundsScreen}
					options={{
						title: FUNDS_SCREEN_TITLE
					}}
				/>
				<Stack.Screen
					name={PENSIONS}
					component={PensionsScreen}
					options={{
						title: PENSIONS_SCREEN_TITLE
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
