export const initialState = {
  basket: [
    {
      key: "1",
      title: "This is the tiltle",
      price: "2.00",
      image:
        "https://images.unsplash.com/photo-1585472132900-40b968e3f7eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //add item to basket
      //returns what the new data would look like when modified
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //remove item to basket

      // cloned basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //if item exists, remove
        newBasket.splice(index, 1);
      } else {
        console.warn();
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
