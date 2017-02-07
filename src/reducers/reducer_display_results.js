import { DISPLAY_RESULTS } from '../actions/ebay_call';


export default function (state = [], action){
 debugger
  switch (action.type){
    case DISPLAY_RESULTS:
      return [...action.payload];
  }

  return state;
}
