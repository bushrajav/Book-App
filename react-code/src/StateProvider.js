// Tracking the basket

import React, { createContext, useContext, useReducer } from "react";

// Data layer
export const StateContext = createContent();

//create provider to wrap app inside and give access to layer above
export const StateProver = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//used in component
export const useStateValue = () => useContext(StateContext);
