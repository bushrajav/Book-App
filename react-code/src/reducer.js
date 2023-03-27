export const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //do stuff that adds to basket
      break;
    case "REMOVE_FROM_BASKET":
      //do stuff to remove from basket
      break;
    default:
      return state;
  }
}

export default reducer;
//
