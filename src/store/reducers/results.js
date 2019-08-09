// import { INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT } from './actions';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.payload
  );
  return updateObject(state, { results: updatedArray });
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, { value: action.payload, id: new Date() }]
        // results: state.results.concat(state.counter)
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArr = [...state.results];
      // newArr.splice(id, 1);
      // return {
      //   ...state,
      //   results: newArr
      // }
      return deleteResult(state, action);
  }
  return state;
};

export default resultsReducer;
