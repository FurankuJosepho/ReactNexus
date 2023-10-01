import  {PRODUCTS } from "../games";
import Product from "../components/Product"
function store() {
  return (
    <div>
      <div className="shopTitle">
        <h1>Welcome to the Store</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
      // eslint-disable-next-line react/jsx-key
      <Product data= {product}/> 
      ))}

      </div>
    </div>
  )
}

export default store
