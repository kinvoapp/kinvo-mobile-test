import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import SectionCard from '../../components/SectionCard'
import ScreenContainer from '../../components/ScreenContainer'
import { STOCKS, FUNDS, PENSIONS } from '../../utils/consts/routeNames'

function HomeScreen() {
	return (
		<SafeAreaView>
			<ScreenContainer>
				<ScrollView>
					<SectionCard id={STOCKS} />
					<SectionCard id={FUNDS} />
					<SectionCard id={PENSIONS} isLastChild={true} />
				</ScrollView>
			</ScreenContainer>
		</SafeAreaView>
	)
}

export default HomeScreen
