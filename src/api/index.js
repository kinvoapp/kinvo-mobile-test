import axios from './axios'

export function getStocks() {
	return axios.get('/stocks')
}

export function getFunds() {
	return axios.get('/funds')
}

export function getPensions() {
	return axios.get('/pension')
}
