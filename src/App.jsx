import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <CartProvider>
            <Navbar />

            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenido a la Tienda" />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Categoría seleccionada" />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='*' element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
        </CartProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;