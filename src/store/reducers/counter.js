// import { INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT } from './actions';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // const newState = Object.assign({}, state);
      // newState.counter = state.counter + 1;
      // return newState;
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case actionTypes.SUBTRACT:
      // utility function
      return updateObject(state, { counter: state.counter - action.payload });
  }
  return state;
};

export default counterReducer;
