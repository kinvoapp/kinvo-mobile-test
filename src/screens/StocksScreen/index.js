import React from 'react'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import { SafeAreaView } from 'react-native'
import { fetchStocks } from '../../actions/stocksActions'
import Loader from '../../components/Loader'
import ErrorWarning from '../../components/ErrorWarning'
import StockCard from '../../components/StockCard'
import InvestmentList from '../../components/InvestmentList'
import ListScreenContainer from '../../components/ListScreenContainer'

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
			<ListScreenContainer>
				{isPending ? (
					<Loader />
				) : error ? (
					<ErrorWarning error={error} retryAction={fetchStocks} />
				) : (
					<InvestmentList
						data={stocks}
						renderItem={renderItem}
						keyExtractor={(item) => item.id + ''}
					/>
				)}
			</ListScreenContainer>
		</SafeAreaView>
	)

	function renderItem({ item, index }) {
		return <StockCard stock={item} isFirstChild={index === 0} />
	}
}

export default StocksScreen
