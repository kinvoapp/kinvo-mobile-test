import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import SectionCard from '../../components/SectionCard'
import { Container } from './styles'
import { STOCKS, FUNDS, PENSIONS } from '../../utils/consts/routeNames'

function HomeScreen() {
	return (
		<SafeAreaView>
			<Container>
				<ScrollView>
					<SectionCard id={STOCKS} />
					<SectionCard id={FUNDS} />
					<SectionCard id={PENSIONS} isLastChild={true} />
				</ScrollView>
			</Container>
		</SafeAreaView>
	)
}

export default HomeScreen
