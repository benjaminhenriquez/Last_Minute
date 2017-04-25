import { TERM } from '../actions/query_term'

export default function (state = "", action){
  switch (action.type){
    case TERM:
      return action.payload;
  }
  return state;
}
