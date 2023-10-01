/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { PRODUCTS } from "../games";
import Product from "../components/Product";

const ShopContext = createContext(null);

const getDefaultGames = () =>{
    let cart = [];
    for (let i = 0; i < PRODUCTS.length + 0; i++) {
       cart[i] = 0;
    }
    return cart;
}

function ShopContextProvider(props) {
    const [gamesItems, setgamesItems] = useState(getDefaultGames());

    const totalCartAmount = () => {
        let totalAmount = 0;
        for (const item in gamesItems){
            if (gamesItems[item] > 0) {
                let intemInfo = PRODUCTS.find((Product) => Product.id === Number(item))
                totalAmount += gamesItems[item] * intemInfo.price
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) =>{
        setgamesItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }
    const removeToCart = (itemId) =>{
        setgamesItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const contextVal = {gamesItems, addToCart, removeToCart, totalCartAmount};
  // eslint-disable-next-line react/prop-types
  console.log(gamesItems)
  return <ShopContext.Provider value = {contextVal}>{props.children}</ShopContext.Provider>;
}

export { ShopContext, ShopContextProvider };
