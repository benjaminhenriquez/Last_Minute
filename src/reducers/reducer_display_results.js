import { DISPLAY_RESULTS } from '../actions/ebay_call'

export default function (state = [], action){
  switch (action.type){
    case DISPLAY_RESULTS:
      return [...action.payload.data.findItemsAdvancedResponse[0].searchResult[0].item];
  }
  return state;
}
