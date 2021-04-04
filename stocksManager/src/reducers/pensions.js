import { compareStocks } from '../services/utils';


export default function pensions(state=[], action) {

    switch (action.type) {
        case 'GET_PENSIONS':
            console.log(action);
            let sorted = action.payload.pensions;
            sorted.sort(compareStocks);
            return sorted
        default:
            return state;
    }
}