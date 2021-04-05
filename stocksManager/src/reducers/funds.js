import { compareStocks } from '../services/utils';


export default function funds(state=[], action) {

    switch (action.type) {
        case 'GET_FUNDS':
            let sorted = action.payload.funds;
            sorted.sort(compareStocks);
            return sorted
        default:
            return state;
    }
}