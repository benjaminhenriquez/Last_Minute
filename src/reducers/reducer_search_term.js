import { SEARCH_TERM } from '../actions/search_term';


export default function (state = "", action){
  switch (action.type){
    case SEARCH_TERM:
      return action.payload;
  }

  return state;
}
