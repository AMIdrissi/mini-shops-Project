import { createContext, useContext } from "react";
import ButtonForMenu from "./UI/buttons/ButtonForMenu";

// possible fetching throu here maybe ??

export const CartContext = createContext(null);

export function useCartContext() {
  const cart = useContext(CartContext);
  // behaviour in case of undefined
  return cart;
}
