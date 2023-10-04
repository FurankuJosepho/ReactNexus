import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import "../CSS/store.css";

function Product(props) {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { id, game, price, gameImages } = props.data;
  const { addToCart } = useContext(ShopContext);

  const undermaintenance = () => {
    alert("This page is undermaintenance")
  }
  return (
    <div className="productContainer">
      <div className="productCard">
        <img src={gameImages} />
        <div className="productDescription">
          <h4 className="productTitle">{game}</h4>
          <p className="productPrice">₱{price}</p>
        </div>
        <div className="slidingCard">
          <button className="addToCart" onClick={() => addToCart(id)}>
            Add to Cart
          </button>
          <button className="addToCart" onClick={() => undermaintenance()}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
