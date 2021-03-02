const currencyFormatter = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
})

export function toBRL(number) {
	return currencyFormatter.format(number).split('$').join('$ ')
}

export function toBRNumber(
	number,
	minimumFractionDigits,
	maximumFractionDigits
) {
	const formatter = createNumberFormatter(
		minimumFractionDigits,
		maximumFractionDigits
	)
	return formatter.format(number)
}

function createNumberFormatter(minimumFractionDigits, maximumFractionDigits) {
	return new Intl.NumberFormat('pt-BR', {
		minimumFractionDigits,
		maximumFractionDigits
	})
}
