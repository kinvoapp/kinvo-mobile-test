import { createReducer } from '@reduxjs/toolkit'
import {
	fetchPensions,
	applyPensionsFilter,
	removePensionsFilter
} from '../actions/pensionsActions'
import sortItemsAlphabetically from '../utils/sortItemsAlphabetically'
import {
	NO_TAX,
	MINIMUM_VALUE_100,
	D1
} from '../utils/consts/pensionListFilters'

const initialState = {
	isPending: false,
	pensions: [],
	filteredPensions: [],
	filters: {
		[NO_TAX]: false,
		[MINIMUM_VALUE_100]: false,
		[D1]: false
	},
	error: null
}

const pensionsReducer = createReducer(
	initialState,
	{
		[fetchPensions.pending]: (state) => {
			if (__DEV__) console.log(fetchPensions.pending.toString())

			return {
				...state,
				isPending: true,
				error: null
			}
		},
		[fetchPensions.fulfilled]: (state, action) => {
			if (__DEV__)
				console.log(fetchPensions.fulfilled.toString(), action.payload)

			const pensions = action.payload.data
			pensions.sort(sortItemsAlphabetically)
			const filteredPensions = pensions.slice()
			const filters = {
				[NO_TAX]: false,
				[MINIMUM_VALUE_100]: false,
				[D1]: false
			}

			return {
				...state,
				isPending: false,
				pensions,
				filteredPensions,
				filters,
				error: null
			}
		},
		[fetchPensions.rejected]: (state, action) => {
			if (__DEV__)
				console.log(fetchPensions.rejected.toString(), action.payload)

			return {
				...state,
				isPending: false,
				error: action.payload
			}
		},
		[applyPensionsFilter]: (state, action) => {
			const filters = { ...state.filters }
			if (filters.hasOwnProperty(action.payload))
				filters[action.payload] = true

			const filteredPensions = filterPensions(state.pensions, filters)
			filteredPensions.sort(sortItemsAlphabetically)

			return {
				...state,
				filteredPensions,
				filters
			}
		},
		[removePensionsFilter]: (state, action) => {
			const filters = { ...state.filters }
			if (filters.hasOwnProperty(action.payload))
				filters[action.payload] = false

			const filteredPensions = filterPensions(state.pensions, filters)
			filteredPensions.sort(sortItemsAlphabetically)

			return {
				...state,
				filteredPensions,
				filters
			}
		}
	},
	[],
	(state) => state
)

function filterPensions(pensions, filters) {
	return pensions.filter((pension) => {
		let result = true
		if (filters[NO_TAX]) {
			result = result && pension.tax === 0
		}
		if (filters[MINIMUM_VALUE_100]) {
			result = result && pension.minimumValue === 100
		}
		if (filters[D1]) {
			result = result && pension.redemptionTerm === 1
		}
		return result
	})
}

export default pensionsReducer
