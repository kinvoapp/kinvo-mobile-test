import { CompareItemsByName } from '../services/utils';


export default function pensions(state=[], action) {

    switch (action.type) {
        case 'GET_PENSIONS':
            let sorted = action.payload.pensions;
            sorted.sort(CompareItemsByName);
            return sorted
        default:
            return state;
    }
}