import { combineReducers } from "redux";
import { filtersReducer } from "./filters/filtersReducer";
import { jobPositionsReducer } from "./jobPositions/jobPositionsReduser";

export const rootReducer = combineReducers({
  jobPositions: jobPositionsReducer,
  filters: filtersReducer,
});