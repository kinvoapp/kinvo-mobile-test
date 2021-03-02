import React from 'react'
import { useDispatch } from 'react-redux'
import FavoriteEmpty from '../../assets/favorite-empty.svg'
import FavoriteFilled from '../../assets/favorite-filled.svg'
import { Container } from './styles'
import {
	addFavoriteStockId,
	removeFavoriteStockId
} from '../../actions/stocksActions'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'

function MarkAsFavoriteButton({ investmentId }) {
	const dispatch = useDispatch()
	const isFavorite = useShallowEqualSelector((state) =>
		state.stocksReducer.favorites.includes(investmentId)
	)

	return (
		<Container onPress={toggleFavorite}>
			{isFavorite ? <FavoriteFilled /> : <FavoriteEmpty />}
		</Container>
	)

	function toggleFavorite() {
		if (isFavorite) dispatch(removeFavoriteStockId(investmentId))
		else dispatch(addFavoriteStockId(investmentId))
	}
}

export default MarkAsFavoriteButton
