export default function Cart(props) {

  function getSubtotal() {
    let subtotal = 0;
    props.cart.forEach(item => subtotal += item.price);
    return subtotal
  }

  function clearCart() {
    const confirmation = confirm('Are you sure?')
    if (confirmation === true) {
      const w2 = props.cart.filter(item => item._id === 1).length;
      const w5 = props.cart.filter(item => item._id === 2).length;
      const w8 = props.cart.filter(item => item._id === 3).length;

      props.setProduct([...props.products],
        props.products[0].quantity -= w2,
        props.products[1].quantity -= w5,
        props.products[2].quantity -= w8
      );
        localStorage.setItem('productData', JSON.stringify(props.products))
      props.setCart([])
    } else {
      return;
    }
    
  }

  if( !props.cart ) return <></>;
  return (
    <>
    <h3>Your cart</h3>
      <table className="table">
        
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {props.cart.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.price}</td>

            </tr>
          ))}
        </tbody>
      </table>
      <h3>Subtotal: {getSubtotal()}</h3>
      <button className="btn btn-success" onClick={() => clearCart()}>Purchase</button>
    </>
  )
}