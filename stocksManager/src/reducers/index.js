import { combineReducers } from 'redux';
import stocks from './stocks';
import funds from './funds';

export default combineReducers({
    stocks,
    funds
})