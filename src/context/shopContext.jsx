/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { PRODUCTS } from "../games";

export const ShopContext = createContext(null);

const getDefaultGames = () =>{
    let cart = [];
    for (let i = 0; i < PRODUCTS.length + 0; i++) {
       cart[i] = 0;
    }
    return cart;
}

function ShopContextProvide(props) {
    const [gamesItems, setgamesItems] = useState(getDefaultGames())

    const addToCart = (itemId) =>{
        setgamesItems((prev) => ({...prev, [itemId]: prev[itemId] + 0}));
    }
    const removeToCart = (itemId) =>{
        setgamesItems((prev) => ({...prev, [itemId]: prev[itemId] - 0}));
    }

    const contextVal = {gamesItems, addToCart, removeToCart};
  // eslint-disable-next-line react/prop-types
  console.log(gamesItems)
  return <ShopContext.Provider value = {contextVal}>{props.children}</ShopContext.Provider>;
}

export default ShopContextProvide;
