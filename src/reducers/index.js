import { combineReducers } from 'redux';

import results from './reducer_display_results';
import query from './reducer_query_term';


const rootReducer = combineReducers({ results, query });

export default rootReducer;
