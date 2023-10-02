import  {PRODUCTS } from "../games";
import Product from "../components/Product"
import "../CSS/store.css";
function store() {
  return (
    <div className="storeContainer">
      <div className="shopTitle">
        <h1>Welcome to the Store</h1>
      </div>
      <div className="storeproducts">
        {PRODUCTS.map((product) => (
      // eslint-disable-next-line react/jsx-key
      <Product data= {product}/> 
      ))}

      </div>
    </div>
  )
}

export default store
