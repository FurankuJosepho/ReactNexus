import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { PRODUCTS } from "../games";
import Cartitem from "../components/itemCart";

function Cart() {
  const { gamesItems, totalCartAmount } = useContext(ShopContext);
const totalAmount = totalCartAmount();
  return (
    <div className="Cart">
      <div className="cartContainer">
        <h1>Your games in Cart</h1>
      </div>
      <div className="cartProducts">
        {PRODUCTS.map((Product) => {
          if (gamesItems[Product.id] !== 0) {
            return <Cartitem key={Product.id} data={Product} />;
          }
        })}
      </div>
      <div className="overAll">
        <p className="totalOf">Total Purchase:₱{totalAmount}</p>
        <button className="buytBTN">Buy</button>
      </div>
    </div>
  );
}

export default Cart;
