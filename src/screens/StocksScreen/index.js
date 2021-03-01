import React from 'react'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import { SafeAreaView, Text } from 'react-native'
import ScreenContainer from '../../components/ScreenContainer'
import Loader from '../../components/Loader'

function StocksScreen() {
	const isPending = useShallowEqualSelector(
		(state) => state.stocksReducer.isPending
	)
	const stocks = useShallowEqualSelector(
		(state) => state.stocksReducer.stocks
	)
	const error = useShallowEqualSelector((state) => state.stocksReducer.error)

	return (
		<SafeAreaView>
			<ScreenContainer>
				{isPending ? (
					<Loader />
				) : error ? (
					<Text>{error}</Text>
				) : (
					<Text>The Stocks Screen!</Text>
				)}
			</ScreenContainer>
		</SafeAreaView>
	)
}

export default StocksScreen
