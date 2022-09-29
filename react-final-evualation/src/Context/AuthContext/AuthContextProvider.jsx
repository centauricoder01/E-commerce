import React, { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";

// 1. create auth context and auth context provider for the entire application to have auth related data;

// 2. maintain loading,error, auth status and token in the state; it goes without saying; you are expected to use useReducer as state management tool; (hint : different actions that you are expected to have can be login - loading, success, failure ..)

// 3. send both state and dispatch values so that entire application has access to the state and dispatch function;
export const data = createContext();

const Initalize = {
  loading: true,
  error: false,
  auth_state: false,
  token: "",
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, Initalize);

  return <data.Provider value={{ state, dispatch }}>{children}</data.Provider>;
};

export default AuthContextProvider;
