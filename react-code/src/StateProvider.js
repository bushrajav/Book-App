// set up data layer
// tracking basket
import React, { createContext, useContext, useReducer } from "react";

//data layer
export const StateContext = createContext();

//provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// use in componenet
export const useStateValue = () => useContext(StateContext);
