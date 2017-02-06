


export default function (state = "", action){

  switch (action.type){
    case "SEARCH_TERM":

      return state = action.payload;
  }
  return state;
}
