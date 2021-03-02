import React from 'react'
import { MinimumValueText } from './styles'
import { toBRL } from '../../utils/formatNumber'

function MinimumValue({ value, isActive = true, ...props }) {
	return (
		<MinimumValueText isActive={isActive} {...props}>
			{toBRL(value)}
		</MinimumValueText>
	)
}

export default MinimumValue
