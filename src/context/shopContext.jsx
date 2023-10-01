/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
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

     // Load cart data from localStorage when the component mounts
     useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart) {
            setgamesItems(savedCart);
        }
    }, []);

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
        if (gamesItems[itemId] === 0) { // Check if the item is not already in the cart
            setgamesItems((prev) => {
                const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
                localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save the updated cart to localStorage
                return updatedCart;
            });
        }
    }
    const removeToCart = (itemId) =>{
        if (gamesItems[itemId] > 0) { // Check if there's at least one item in the cart
            setgamesItems((prev) => {
                const updatedCart = { ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) };
                localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save the updated cart to localStorage
                return updatedCart;
            });
        }
    }

    const contextVal = {gamesItems, addToCart, removeToCart, totalCartAmount};
  // eslint-disable-next-line react/prop-types
  console.log(gamesItems)
  return <ShopContext.Provider value = {contextVal}>{props.children}</ShopContext.Provider>;
}

export { ShopContext, ShopContextProvider };
