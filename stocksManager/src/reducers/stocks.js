export default function library(state=[], action) {

    switch (action.type) {
        case 'GET_STOCKS':
            console.log(action);
            return action.payload.stocks;
        default:
            return state;
        
    }
}