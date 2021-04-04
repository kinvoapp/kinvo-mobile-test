import { compareStocks } from '../services/utils';


export default function funds(state=[], action) {

    switch (action.type) {
        case 'GET_FUNDS':
            console.log(action);
            let sorted = action.payload.funds;
            sorted.sort(compareStocks);
            console.log(sorted)
            return sorted
        default:
            return state;
    }
}