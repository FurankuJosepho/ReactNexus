/* eslint-disable no-undef */
    /* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import "../CSS/store.css"

function Cartitem(props) {
    const { id, game, price, gameImages } = props.data;
    const { removeToCart } = useContext(ShopContext);
    
  return (
    <div className="cart">
      <div className="productContainer2">
          <img src={gameImages} />
          <div className="productDescription2">
            <h4 className="productTitle2">{game}</h4>
            <p className="productPrice2">₱{price}</p>
          </div>
          <div className="slidingCard2">
            <button className="toRemoveBTN" onClick={() => removeToCart(id)}>Remove</button>
          </div>
      </div>
      </div>
  )
}

export default Cartitem