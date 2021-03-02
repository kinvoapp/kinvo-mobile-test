import React from 'react'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import { SafeAreaView, FlatList } from 'react-native'
import { fetchStocks } from '../../actions/stocksActions'
import ScreenContainer from '../../components/ScreenContainer'
import Loader from '../../components/Loader'
import ErrorWarning from '../../components/ErrorWarning'
import StockCard from '../../components/StockCard'

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
					<ErrorWarning error={error} retryAction={fetchStocks} />
				) : (
					<FlatList
						data={stocks}
						renderItem={renderItem}
						keyExtractor={(item) => item.id + ''}
					/>
				)}
			</ScreenContainer>
		</SafeAreaView>
	)

	function renderItem({ item, index }) {
		return <StockCard stock={item} isFirstChild={index === 0} />
	}
}

export default StocksScreen
