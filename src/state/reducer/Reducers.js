const initialState = 0;
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return (state = state + action.payload);
      break;
    case "DECREASE":
      return (state = state - action.payload);
      break;

    default:
      return state;
      break;
  }
};

export default Reducer;