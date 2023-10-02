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
      <div className="productContainer">
        <div className="productCard">
          <img src={gameImages} />
          <div className="productDescription">
            <h4 className="productTitle">{game}</h4>
            <p className="productPrice">₱{price}</p>
          </div>
          <div className="slidingCard">
            <button className="toRemoveBTN" onClick={() => removeToCart(id)}>Remove</button>
          </div>
        </div>
      </div>
  )
}

export default Cartitem