import axios from 'axios';

export const DISPLAY_RESULTS = "DISPLAY_RESULTS"

// import { displayResults } from './display_results'

export function ebayCall(query){
  let timeLimit = 600000; // 10 mins
  let maxPrice = 10.00; // 10 dollars
  let pages = 3;

  let deadline = new Date(Date.now() + timeLimit).toJSON();

  let apiURL = 'https://svcs.ebay.com/services/search/FindingService/v1';
  let queryData = {params:{
    'OPERATION-NAME': 'findItemsAdvanced',
    'SERVICE-VERSION': '1.0.0',
    'SECURITY-APPNAME': 'Benjamin-LastMinu-PRD-7d0e575c3-05a8dcf0',
    'RESPONSE-DATA-FORMAT': 'JSON',
    'REST-PAYLOAD': 'true',
    'keywords': 'baseball',  //query example, using 'baseball' search term
    'paginationInput.entriesPerPage': pages,
    'sortOrder': 'BestMatch',
    'itemFilter(0).name': 'EndTimeTo',
    'itemFilter(0).value': deadline,
    'itemFilter(1).name': 'ListingType',
    'itemFilter(1).value': 'Auction',
    'itemFilter(2).name': 'MaxPrice',
    'itemFilter(2).value': maxPrice,
    'outputSelector(0)': 'PictureURLLarge',
    'outputSelector(1)': 'SellerInfo'}
  };


axios.get(apiURL, queryData)
  .then(function(results) {
    let request = results.data.findItemsAdvancedResponse[0].searchResult[0].item
    console.log(request)

        return {type: DISPLAY_RESULTS, payload: request};
  
  }    )







}
