import React from 'react'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import { fetchFunds } from '../../actions/fundsActions'
import { SafeAreaView } from 'react-native'
import InvestmentList from '../../components/InvestmentList'
import ListScreenContainer from '../../components/ListScreenContainer'
import ErrorWarning from '../../components/ErrorWarning'
import Loader from '../../components/Loader'
import FundCard from '../../components/FundCard'

function FundsScreen() {
	const isPending = useShallowEqualSelector(
		(state) => state.fundsReducer.isPending
	)
	const funds = useShallowEqualSelector((state) => state.fundsReducer.funds)
	const error = useShallowEqualSelector((state) => state.fundsReducer.error)

	return (
		<SafeAreaView>
			<ListScreenContainer>
				{isPending ? (
					<Loader />
				) : error ? (
					<ErrorWarning error={error} retryAction={fetchFunds} />
				) : (
					<InvestmentList
						data={funds}
						renderItem={renderItem}
						keyExtractor={(item) => item.id + ''}
					/>
				)}
			</ListScreenContainer>
		</SafeAreaView>
	)

	function renderItem({ item, index }) {
		return <FundCard fund={item} isFirstChild={index === 0} />
	}
}

export default FundsScreen
