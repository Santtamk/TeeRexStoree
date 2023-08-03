import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './component/header';
import Products from './component/products';
import { useSnackbar } from "notistack";
import Cart from './component/cart';

function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  const {enqueueSnackbar} = useSnackbar()


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id)
      isPresent=true
    })
      if(isPresent){
        enqueueSnackbar(
          "Item already in cart. Use the cart sidebar to update quantity or remove item.",
          {
            variant: "warning",
          })
          return;
      }
      
      setCart([...cart, {...item, quantity:1}]);
  }


  
  return (
    <React.Fragment>
      <Header size={cart.length} setShow={setShow}/>
      {
        show ? <Products handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart}  />
      }
      </React.Fragment>
  );
}

export default App;
