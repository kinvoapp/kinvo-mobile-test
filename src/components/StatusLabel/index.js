import React from 'react'
import { Label, LabelText } from './styles'
import { CLOSED, CLOSED_TEXT, NEW_TEXT } from '../../utils/consts/fundStatus'

function StatusLabel({ status, isCardTopRight = true }) {
	return (
		<Label status={status} isCardTopRight={isCardTopRight}>
			<LabelText status={status}>
				{status === CLOSED ? CLOSED_TEXT : NEW_TEXT}
			</LabelText>
		</Label>
	)
}

export default StatusLabel
