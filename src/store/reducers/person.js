const initState = {
  persons: []
};

const personReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        persons: [
          ...state.persons,
          {
            id: Math.random(),
            value: action.payload,
            name: 'Max',
            age: Math.floor(Math.random() * 40)
          }
        ]
      };
  }
  return state;
};

export default personReducer;
