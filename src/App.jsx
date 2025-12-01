import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout'; 

import { CartProvider } from '../Context/CartContext'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenido" />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Filtrado" />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              
              <Route path='*' element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;