export default function Products(props) {

  function addToCart(product) {
    console.log(product)
    props.setCart([...props.cart, product])
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
        </thead>

        <tbody>
          {props.products.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button className="btn btn-primary" onClick={ () => addToCart(product)}>Add to cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}