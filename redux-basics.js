const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.payload
      };
  }
  return state;
};

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// Dispatching and Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', payload: 10 });
