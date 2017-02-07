export const SEARCH_TERM = "SEARCH_TERM"

export function updateSearchTerm(query){
  return {
    type: SEARCH_TERM,
    payload: query
  };
}
