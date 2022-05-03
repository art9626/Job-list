import { ADD_FILTER, CLEAR_FILTERS, REMOVE_FILTER } from "./filtersConst";

export const actions = {
  addFilter: (filter) => ({ type: ADD_FILTER, filter }),
  removeFilter: (filter) => ({ type: REMOVE_FILTER, filter }),
  clearFilters: () => ({ type: CLEAR_FILTERS }),
}