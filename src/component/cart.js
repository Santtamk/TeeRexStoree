import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import './cart.css'

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  const handlePrice = () => {
    let cash = 0;
    cart.forEach((product) => {
      cash += product.price * product.quantity;
    });
    setPrice(cash);
  };
  useEffect(() => {
    handlePrice();
  }, [cart]);

  const handleIncrement = (product) => {
    if (product.quantity < product.quantityLimit) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      enqueueSnackbar("Max quantity reached", {
        variant: "warning",
      });
    }
  };

  const handleDecrement = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleDelete = (id) => {
    const arr = cart.filter((product) => product.id !== id);
    setCart(arr);
  };

//   return (
//     <article className="container">
//       <h3 className="m-5">Shopping Cart</h3>
//       <div className="row">
//       {cart?.map((product) => (
//         <div
//           key={product.id}
//           className=" col-md-12 mb-3"
//           style={{ width: "8rem" }}
//         >
//     <div className="d-flex rounded shadow-sm border p-3">
//           <img
//             className="img-thumbnail"
//             src={product.imageURL}
//             alt={product.name}
//           />
//           <div className="d-flex flex-column justify-content-between ml-3">
//             <div className="card-body">
//               <h5 className="card-title">
//                 {product.name}
//               </h5>
//               <h6 className="card-title">
//                 {product.currency} {product.price}
//               </h6>
//             </div>
//             <div className="d-flex justify-content-between">
//               <button onClick={() => handleIncrement(product)}> + </button>
//               <button> {product.quantity} </button>
//               <button onClick={() => handleDecrement(product)}> - </button>
//             </div>
//             <div>
//               <button
//                 className="btn btn-danger mt-2"
//                 onClick={() => handleDelete(product.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//           </div>
//           </div>
//       ))}
//       </div>
//       <div className="d-flex">
//         <p>
//           <b>Total price of the cart</b>
//         </p>
//         <span>INR {price}</span>
//       </div>
//     </article>
//   );
// };


return (
  <div className="container mt-5 mb-5">
  <div className="d-flex justify-content-center row">
      <div className="col-md-8">
          <div className="p-2">
              <h4>Shopping cart</h4>
          </div>
          {cart?.map((product) => (
          <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
              <div className="mr-1"><img className="rounded" src={product.imageURL}alt={product.name} width="70"/></div>
              <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{product.name}</span>
                  
              </div>
              <div className="d-flex flex-row align-items-center qty">
              <button onClick={() => handleIncrement(product)}> + </button>
               <button> {product.quantity} </button>
               <button onClick={() => handleDecrement(product)}> - </button>
              </div>
              <div>
                  <h5 className="text-grey">{product.price}</h5>
              </div>
              <div className="d-flex align-items-center"><button
                className="btn btn-danger mt-2"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button></div>
          </div>
          ))}
                    <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">Total  :  {price}</div>
          <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay(comming Soon)</button></div>
      </div>
  </div>
</div>
    )
}
export default Cart;
