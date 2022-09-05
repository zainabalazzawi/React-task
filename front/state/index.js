import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const defaultState = { cart: {} };

export function StateProvider({ children }) {
  const [state, setState] = useState(defaultState);

  const addItem = (id) => {
    console.log("addItem", id);
    if (!id) return;

    setState({
      ...state,
      cart: {
        ...state.cart,
        [id]: state.cart[id] ? ++state.cart[id] : 1,
      },
    });
  };

  const removeItem = (id) => {
    const current = state.cart[id];

    if (!current) return;

    if (current === 1) {
      const newCart = { ...state.cart };
      delete newCart[id];
      setState({
        ...state,
        cart: newCart,
      });
      return;
    }

    setState({
      ...state,
      cart: {
        ...state.cart,
        [id]: --state.cart[id],
      },
    });
  };

  const hasItem = (id) => {
    return !!state.cart[id];
  };

  const clearItems = () => {
    setState(defaultState);
  };

  const totalItems = Object.values(state.cart).reduce((acc, current) => {
    return acc + current;
  }, 0);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
    // console.log(state);
  }, [state]);

  useEffect(() => {
    const cartState = JSON.parse(localStorage.getItem("state"));
    if (cartState) {
      setState(cartState);
    }
    console.log(cartState);
  }, []);

  return (
    <Context.Provider
      value={{
        state,
        cart: state.cart,
        totalItems,
        isEmpty: totalItems === 0,
        addItem,
        removeItem,
        clearItems,
        hasItem,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useStateContext() {
  return useContext(Context);
}
