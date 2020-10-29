import { Products } from "./types";


export function searchInputValue(searchValue: Products[]) {
  return {
    type: "SEARCH_INPUT_VALUE",
    payload: {
      searchValue
    }
  };
}