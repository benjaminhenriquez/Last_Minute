import { combineReducers } from 'redux';
//
import results from './reducer_search_term';
import searchTerm from './reducer_display_results';

const rootReducer = combineReducers({
  results,
  searchTerm
});

export default rootReducer;
