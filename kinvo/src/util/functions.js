export const formatDecimalValue = (value) => value.toString().replace(/[.]/g, ",")
export const sortAlphabetically = (data) => data.sort((a, b) => a.name.localeCompare(b.name))
export const sortStocks = (stocks) => stocks.sort((a, b) => Number(b.favorited) - Number(a.favorited))