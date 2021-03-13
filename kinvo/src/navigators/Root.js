import React from 'react'

import { 
	createStackNavigator, 
	TransitionPresets 
} from '@react-navigation/stack'

import HomeScreen from '../screens/home'
import SharesScreen from '../screens/shares'
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
						},
						headerTitleContainerStyle: {
							paddingTop: 4,
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
						title: strings.challenge
					}}
        />
        <RootStack.Screen 
					name="Shares"
					component={SharesScreen}
					options={{
						title: strings.shares
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