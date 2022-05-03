import { ADD_POSITIONS } from './jobPositionsConst';

export const jobPositionsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS:
      return  [...action.payload];
      
    default:
      return state;
  }
};