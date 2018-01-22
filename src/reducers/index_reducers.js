import { combineReducers } from 'redux';
import DisplayFeedsReducers from './displayfeeds_reducer';

const allReducers = combineReducers({
    feeds: DisplayFeedsReducers
});

export default allReducers;