/**
 * This is a template for creating a simple state management system
 * using createContext and useReducer.
 */
import React, { createContext, useReducer, useContext } from "react";

/**  The starting state. This is used by createContext and useReducer. */
const defaultInitialState = {
  value: ""
};

/**
 * An Enum containing the various calls to the dispatch.
 * @property {string} SET_VALUE Sets payload.value to state.value.
 * @example dispatch({ type: types.SET_VALUE, payload: { value: 'Test' }})
 */
export const types = {
  /** Sets payload to state.value. */
  SET_VALUE: "SET_VALUE"
};

/**  This is the main reducer function that will be called from the provider. */
function reducer(state, action) {
  switch (action.type) {
    case types.SET_VALUE:
      return {
        ...state,
        value: action.payload
      };
    default:
      throw new Error(`reducer does not have the action type: ${action.type}`);
  }
}

/**
 * The main Context. Prefer to use the custom hook `useSearch` instead.
 * @see useSearch
 */
export const Context = createContext(defaultInitialState);

/** The provider will make accessible the [state, dispatch] from the reducer to all child components.  */
export const SearchProvider = ({
  children,
  initialState = defaultInitialState
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

/**
 * Custom hook that prevents having to import both useContext & Context.
 * @example const [state, dispatch] = useSearch();
 */
export const useSearch = () => useContext(Context);

// Add any custom hooks below this section: