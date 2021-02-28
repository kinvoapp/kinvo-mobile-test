import { FAILED_CONNECTION } from './consts/errorMessages'

export default function handleRequestError(err, rejectWithValue) {
	if (err.response) {
		return rejectWithValue(err.response.data)
	} else if (err.request) {
		return rejectWithValue(FAILED_CONNECTION)
	} else {
		return rejectWithValue(err.message)
	}
}
