import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import widgets from "./widgets.json";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddProduct from "./components/AddProduct";

function App() {
  const defaultForm = { name: "", price: "", quantity: "" };
  const [products, setProduct] = useState(widgets);
  const [cart, setCart] = useState([]);
  const [newProduct, setNewProduct] = useState(defaultForm);

  function checkForSavedData() {
    const productData = localStorage.getItem("productData");
    if (productData) {
      return JSON.parse(productData);
    }
  }

  // useEffect(() => {
  //   console.log("p", products);
  // }, [products]);

  // useEffect(() => {
  //   const productData = checkForSavedData();
  //   if (productData) setProduct(productData);
  // }, []);

  // useEffect( () => {
  //   console.log('new product', newProduct)
  // }, [newProduct]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Products products={products} setCart={setCart} cart={cart} />
          </div>
          <div className="col-6">
            <AddProduct
              setNewProduct={setNewProduct}
              newProduct={newProduct}
              products={products}
              setProduct={setProduct}
              defaultForm={defaultForm}
            ></AddProduct>
          </div>

          <div className="col-6">
            <Cart
              cart={cart}
              setCart={setCart}
              products={products}
              setProduct={setProduct}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
