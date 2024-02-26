export default function AddProduct(props) {

  function handleInputChange(e) {
    props.setNewProduct({...props.newProduct, [e.target.name]: e.target.value})
  }

  function addNewProduct(e) {
    e.preventDefault();
    console.log('newProduct', props.newProduct)
    props.newProduct._id = props.products.length + 1;
    props.newProduct.price = parseInt(props.newProduct.price)
    props.newProduct.quantity = parseInt(props.newProduct.quantity)
    props.setProduct([...props.products, props.newProduct]);
    props.setNewProduct(props.defaultForm);
  }

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={props.newProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="form-control"
            value={props.newProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="form-control"
            value={props.newProduct.quantity}
            onChange={handleInputChange}
          />
        </div>


        <button className="btn btn-primary" onClick={addNewProduct}>Save Note</button>
      </form>
    </>
  )
}