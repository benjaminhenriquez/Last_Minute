export const TERM = "TERM"

export default function(term){
  return {type:TERM, payload: term};
}
