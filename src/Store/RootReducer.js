import { combineReducers } from 'redux';

import dataReducer from './DataReducer/Data.reducer';


export const rootReducer = combineReducers({
    data: dataReducer
})