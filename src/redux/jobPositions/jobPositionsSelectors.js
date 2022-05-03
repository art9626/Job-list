let currentPositionsFromState = [];
let currentFiltersFromState = [];
let returnedPositions = [];

export const getPositions = (state) => {
  if (currentPositionsFromState !== state.jobPositions || currentFiltersFromState !== state.filters) {
    currentFiltersFromState = state.filters;
    currentPositionsFromState = state.jobPositions;

    returnedPositions = currentPositionsFromState.filter((item) => {
      const checkingData = [ item.role, item.level, ...item.languages, ...item.tools ];

      return currentFiltersFromState.every((item) => checkingData.includes(item));
    });

    return returnedPositions;
  }
  return returnedPositions;
}