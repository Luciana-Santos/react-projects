import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispath({ type: 'CLEAR_CART' });
  };

  const remove = (id) => {
    dispath({ type: 'REMOVE', payload: id });
  };

  const increase = (id) => {
    dispath({ type: 'INCREASE', payload: id });
  };

  const decrease = (id) => {
    dispath({ type: 'DECREASE', payload: id });
  };

  const fetchData = async () => {
    dispath({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    dispath({ type: 'DISPLAY_ITEMS', payload: cart });
  };

  const toggleAmount = (id, type) => {
    dispath({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispath({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
