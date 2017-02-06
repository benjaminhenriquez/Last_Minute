import axios from 'axios';

export default function(query){
  let timeLimit = 600000; // 10 mins
  let maxPrice = 10.00; // 10 dollars
  let pages = 3;

  // let deadline = new Date(Date.now() + timeLimit).toJSON();

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
    // 'itemFilter(0).name': 'EndTimeTo',
    // 'itemFilter(0).value': deadline,
    'itemFilter(0).name': 'ListingType',
    'itemFilter(0).value': 'Auction',
    'itemFilter(1).name': 'MaxPrice',
    'itemFilter(1).value': maxPrice,
    'outputSelector(0)': 'PictureURLLarge',
    'outputSelector(1)': 'SellerInfo'}
  };


let request = axios.get(apiURL, queryData)
  .then(function(results) {
    let searchResults = results.data.findItemsAdvancedResponse[0].searchResult[0]
    console.log(searchResults)
    return searchResults
  }

    )



  return {
      type: "SEARCH_TERM",
      payload: query
    };

}
