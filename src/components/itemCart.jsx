/* eslint-disable no-undef */
    /* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

function Cartitem(props) {
    const { id, game, price, gameImages } = props.data;
    const { removeToCart } = useContext(ShopContext);
    
  return (
      <div className="ItemsCart">
        <div className="ItemsCard">
          <img src={gameImages} />
          <div className="ItemsDescription">
            <h4 className="ItemsTitle">{game}</h4>
            <p className="IItemsPrice">₱{price}</p>
          </div>
          <div className="removeBTN">
            <button className="toRemoveBTN" onClick={() => removeToCart(id)}>Remove</button>
          </div>
        </div>
      </div>
  )
}

export default Cartitem