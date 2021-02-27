import axios from './axios'

export function fetchStocks() {
	return axios.get('/stocks')
}

export function fetchFunds() {
	return axios.get('/funds')
}

export function fetchPensions() {
	return axios.get('/pension')
}
