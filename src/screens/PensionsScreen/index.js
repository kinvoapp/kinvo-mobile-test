import React from 'react'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import { fetchPensions } from '../../actions/pensionsActions'
import { SafeAreaView, Text } from 'react-native'
import InvestmentList from '../../components/InvestmentList'
import ListScreenContainer from '../../components/ListScreenContainer'
import ErrorWarning from '../../components/ErrorWarning'
import Loader from '../../components/Loader'
import PensionCard from '../../components/PensionCard'
import PensionListHeader from '../../components/PensionListHeader'
import PensionListEmptyComponent from '../../components/PensionListEmptyComponent'

function PensionsScreen() {
	const isPending = useShallowEqualSelector(
		(state) => state.pensionsReducer.isPending
	)
	const pensions = useShallowEqualSelector(
		(state) => state.pensionsReducer.filteredPensions
	)
	const error = useShallowEqualSelector(
		(state) => state.pensionsReducer.error
	)

	return (
		<SafeAreaView>
			<ListScreenContainer>
				{isPending ? (
					<Loader />
				) : error ? (
					<ErrorWarning error={error} retryAction={fetchPensions} />
				) : (
					<InvestmentList
						data={pensions}
						renderItem={renderItem}
						keyExtractor={(item) => item.id + ''}
						ListHeaderComponent={PensionListHeader}
						ListEmptyComponent={PensionListEmptyComponent}
					/>
				)}
			</ListScreenContainer>
		</SafeAreaView>
	)

	function renderItem({ item, index }) {
		return <PensionCard pension={item} isFirstChild={index === 0} />
	}
}

export default PensionsScreen
