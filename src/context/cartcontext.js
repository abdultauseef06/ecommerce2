import { createContext, useContext, useReducer, useEffect } from "react";
import Reducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  totalItem: 0,
  totalAmount: 0,
  shippingFee: 10000,
};

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_ITEM = "REMOVE_ITEM";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_TOTAL_ITEM" });
    // Local storage removed
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
