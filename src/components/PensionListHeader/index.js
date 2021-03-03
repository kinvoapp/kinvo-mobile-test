import React from 'react'
import { useDispatch } from 'react-redux'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import {
	applyPensionsFilter,
	removePensionsFilter
} from '../../actions/pensionsActions'
import {
	Container,
	FilterContainer,
	Filter,
	FilterText,
	HorizontalDivider
} from './styles'
import {
	NO_TAX,
	MINIMUM_VALUE_100,
	D1
} from '../../utils/consts/pensionListFilters'

function PensionListHeader() {
	const dispatch = useDispatch()
	const filters = useShallowEqualSelector(
		(state) => state.pensionsReducer.filters
	)

	return (
		<Container>
			<FilterContainer>
				<Filter
					isPressed={isPressed(NO_TAX)}
					onPress={() => chooseFilter(NO_TAX)}>
					<FilterText isPressed={isPressed(NO_TAX)}>
						{NO_TAX}
					</FilterText>
				</Filter>
				<Filter
					isPressed={isPressed(MINIMUM_VALUE_100)}
					onPress={() => chooseFilter(MINIMUM_VALUE_100)}>
					<FilterText isPressed={isPressed(MINIMUM_VALUE_100)}>
						{MINIMUM_VALUE_100}
					</FilterText>
				</Filter>
				<Filter
					isPressed={isPressed(D1)}
					onPress={() => chooseFilter(D1)}>
					<FilterText isPressed={isPressed(D1)}>{D1}</FilterText>
				</Filter>
			</FilterContainer>
			<HorizontalDivider />
		</Container>
	)

	function isPressed(filter) {
		return filters[filter]
	}

	function chooseFilter(filter) {
		if (filters[filter]) dispatch(removePensionsFilter(filter))
		else dispatch(applyPensionsFilter(filter))
	}
}

export default PensionListHeader
