import { combineReducers } from 'redux';
import SearchTermReducer from './reducer_search_term';

const rootReducer = combineReducers({
  searchTerm: SearchTermReducer
});

export default rootReducer;
