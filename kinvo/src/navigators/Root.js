import React from 'react'

import { 
	createStackNavigator, 
	TransitionPresets 
} from '@react-navigation/stack'

import HomeScreen from '../screens/home'
import StocksScreen from '../screens/stocks'
import FundsScreen from '../screens/funds'
import PensionsScreen from '../screens/pensions'

import strings from '../util/strings'
import colors from '../util/colors'

const RootStack = createStackNavigator()

export default () => {
    return (
        <RootStack.Navigator
					initialRouteName="Home"
					screenOptions={{
						...TransitionPresets.SlideFromRightIOS,
						headerStyle: {
							height: 100,
							elevation: 0,
            	shadowOpacity: 0,
							borderWidth: 1,
							borderColor: colors.cardBorder,
						},
						headerLeftContainerStyle: {
							paddingTop: 4,
						},
						headerTitleContainerStyle: {
							left: 0,
							paddingTop: 4,
							marginLeft: 20 + 24 + 13
						},
						headerTintColor: colors.primary,
						headerTitleStyle: {
							fontSize: 20,
							fontWeight: 'bold',
						},
						cardStyle: { 
							backgroundColor: colors.background,
						},
        }}>
        <RootStack.Screen 
					name="Home"
					component={HomeScreen}
					options={{
						title: strings.challenge,
						headerTitleContainerStyle: {	
							left: 0,
							paddingTop: 4,
							marginLeft: 20,
						}
					}}
        />
        <RootStack.Screen 
					name="Stocks"
					component={StocksScreen}
					options={{
						title: strings.stocks
					}}
        />
        <RootStack.Screen 
					name="Funds"
					component={FundsScreen}
					options={{
						title: strings.funds
					}}
        />
        <RootStack.Screen 
					name="Pensions"
					component={PensionsScreen}
					options={{
						title: strings.pensions
					}}
        />
			</RootStack.Navigator>
    )
}