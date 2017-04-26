import { DISPLAY_RESULTS } from '../actions/ebay_call'

import { NO_RESULTS } from '../actions/clear_results'

export default function (state = [], action){
  debugger
  switch (action.type){
    case DISPLAY_RESULTS:
      return [...action.payload.data.findItemsAdvancedResponse[0].searchResult[0].item];
    case NO_RESULTS:
      return [...action.payload]
  }
  return state;
}
