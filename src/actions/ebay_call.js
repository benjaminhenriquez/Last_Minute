import axios from 'axios';

import { findDOMNode } from 'react-dom';
import $ from 'jquery';

export const DISPLAY_RESULTS = "DISPLAY_RESULTS"

export default function(query){
  let timeLimit = 600000; // 10 mins
  let maxPrice = 10.00; // 10 dollars
  let pages = 10;

  let deadline = new Date(Date.now() + timeLimit).toJSON();

  let apiURL = 'https://svcs.ebay.com/services/search/FindingService/v1';
  let queryData = {params:{
    'OPERATION-NAME': 'findItemsAdvanced',
    'SERVICE-VERSION': '1.0.0',
    'SECURITY-APPNAME': 'Benjamin-LastMinu-PRD-7d0e575c3-05a8dcf0',
    'RESPONSE-DATA-FORMAT': 'JSON',
    'REST-PAYLOAD': 'true',
    'keywords': query,
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


  let request = axios.get(apiURL, queryData)


    console.log(request)
    return {type:DISPLAY_RESULTS, payload: request};
}
