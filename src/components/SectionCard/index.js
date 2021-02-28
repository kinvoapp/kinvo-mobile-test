import React from 'react'
import { Container, TextContainer, Title, Subtitle } from './styles'
import StocksIcon from '../../assets/stocks-icon.svg'
import FundsIcon from '../../assets/funds-icon.svg'
import PensionsIcon from '../../assets/pensions-icon.svg'
import { fetchStocks } from '../../actions/stocksActions'
import { fetchFunds } from '../../actions/fundsActions'
import { fetchPensions } from '../../actions/pensionsActions'
import { STOCKS, FUNDS, PENSIONS } from '../../utils/consts/routeNames'

function SectionCard({ id, isLastChild }) {
	return (
		<Container isLastChild={isLastChild}>
			{getIcon()}
			<TextContainer>
				<Title>{getTitle()}</Title>
				<Subtitle>{getSubtitle()}</Subtitle>
			</TextContainer>
		</Container>
	)

	function getIcon() {
		return pickValueBasedOnId(
			<StocksIcon />,
			<FundsIcon />,
			<PensionsIcon />
		)
	}

	function getTitle() {
		return pickValueBasedOnId('Ações', 'Fundos', 'Previdências')
	}

	function getSubtitle() {
		return pickValueBasedOnId('Nacionais', 'De investimentos', 'Privadas')
	}

	function pickValueBasedOnId(stocksValue, fundsValue, pensionsValue) {
		switch (id) {
			case STOCKS:
				return stocksValue
			case FUNDS:
				return fundsValue
			case PENSIONS:
				return pensionsValue
			default:
				throw Error('SectionCard: Invalid id')
		}
	}
}

export default SectionCard
