import React from 'react'
import { Message } from './styles'
import { EMPTY_PENSION_LIST } from '../../utils/consts/errorMessages'

function PensionListEmptyComponent() {
	return <Message>{EMPTY_PENSION_LIST}</Message>
}

export default PensionListEmptyComponent
