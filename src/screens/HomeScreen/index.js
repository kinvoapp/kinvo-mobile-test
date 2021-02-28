import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import SectionCard from '../../components/SectionCard'
import { Container } from './styles'
import StocksIcon from '../../assets/stocks-icon.svg'
import FundsIcon from '../../assets/funds-icon.svg'
import PensionsIcon from '../../assets/pensions-icon.svg'

function HomeScreen() {
	return (
		<SafeAreaView>
			<Container>
				<ScrollView>
					<SectionCard
						Icon={StocksIcon}
						title='Ações'
						subtitle='Nacionais'
					/>
					<SectionCard
						Icon={FundsIcon}
						title='Fundos'
						subtitle='De investimentos'
					/>
					<SectionCard
						Icon={PensionsIcon}
						title='Previdências'
						subtitle='Privadas'
						isLastChild={true}
					/>
				</ScrollView>
			</Container>
		</SafeAreaView>
	)
}

export default HomeScreen
