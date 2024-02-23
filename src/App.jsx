import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import widgets from "./widgets.json"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [products, setProduct] = useState(widgets);
  const [cart, setCart] = useState([]);

  function checkForSavedData() {
    const productData = localStorage.getItem('productData');
    if (productData) {
        return JSON.parse(productData)
    } 
};

  useEffect( () => {
    console.log('p' , products)
  }, [products]);

  useEffect(() => {
    const productData = checkForSavedData();
    if (productData) setProduct(productData);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Products products={products} setCart={setCart} cart={cart} />
          </div>

          <div className="col-6">
            <Cart cart={cart} setCart={setCart} products={products} setProduct={setProduct}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
