import React from 'react';
import TopMenu from './components/TopMenu/TopMenu';
import dbProducts from './db/dbProducts';
import useFetch from './hooks/useFetch';
import Products from './components/Products/Products';


function App() {
  
  const products = useFetch(dbProducts, null);  //Simulación de cargar la API
  //Se simula con el hook porque la página myjson.com ya no carga  
  return (
    <div className="App">
      <TopMenu />
      <Products products={products}/>
    </div>
  );
}

export default App;
