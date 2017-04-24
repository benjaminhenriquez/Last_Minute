import { combineReducers } from 'redux';

import results from './reducer_display_results';
import term from './reducer_query_term';


const rootReducer = combineReducers({ results, term });

export default rootReducer;
