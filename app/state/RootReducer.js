import { combineReducers } from 'redux';
import covidStaticsReducer from './reducers/CovidStaticsReducer';
import filteringOptionsReducer from './reducers/FilteringOptionsReducer';

const makeRootReducer =
    combineReducers({
        covidStaticsReducer: covidStaticsReducer,
        filteringOptionsReducer: filteringOptionsReducer
    });

export default makeRootReducer;
