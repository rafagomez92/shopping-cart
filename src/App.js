import React, { useState, useEffect } from 'react';
import TopMenu from './components/TopMenu/TopMenu';
import dbProducts from './db/dbProducts';
import useFetch from './hooks/useFetch';
import { ToastContainer, toast} from 'react-toastify';
import Products from './components/Products/Products';
import { STORAGE_PRODUCTS_CART} from './utils/constants';

function App() {
  const products = useFetch(dbProducts, null);  //Simulación de cargar la API
  const [ productsCart, setProductsCart] = useState([]);
  //Se simula con el hook porque la página myjson.com ya no carga  

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);
    if(idsProducts) {
      const idsProductsSplit = idsProducts.split(',');
      setProductsCart(idsProductsSplit);
    } else {
      setProductsCart([]);
    }
  }

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    getProductsCart();
    toast.success(`${name} se ha añadido al carrito correctamente`)    
  }
  
  return (
    <div className="App">
      <TopMenu products={products} productsCart={productsCart} getProductsCart={getProductsCart} />    
      <Products products={products} addProductCart={addProductCart}/>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        paunseOnHover={false}
      />
    </div>
  );
}

export default App;
