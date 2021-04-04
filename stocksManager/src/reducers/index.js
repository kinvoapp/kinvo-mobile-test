import { combineReducers } from 'redux';
import stocks from './stocks';
import funds from './funds';
import pensions from './pensions';

export default combineReducers({
    stocks,
    funds,
    pensions
})