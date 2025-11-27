import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

// Si ya creaste el CartContext, descomenta la siguiente línea y el CartProvider abajo
// import { CartProvider } from './context/CartContext'; 

function App() {
  return (
    <div className="App">
      {/* BrowserRouter habilita el ruteo en toda la app */}
      <BrowserRouter>
        
        {/* Si tienes el CartProvider, descomenta esta línea de apertura */}
        {/* <CartProvider> */}

            {/* El Navbar va fuera de Routes para que se vea siempre */}
            <Navbar />

            <Routes>
              {/* RUTA 1: Inicio (Muestra todos los productos) */}
              <Route path='/' element={<ItemListContainer greeting="Bienvenido a la Tienda" />} />

              {/* RUTA 2: Categorías (Muestra productos filtrados) */}
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Categoría seleccionada" />} />

              {/* RUTA 3: Detalle (Muestra un solo producto) */}
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />

              {/* RUTA 4: Error 404 */}
              <Route path='*' element={<h1>404 - Página no encontrada</h1>} />
            </Routes>

        {/* Si tienes el CartProvider, descomenta esta línea de cierre */}
        {/* </CartProvider> */}

      </BrowserRouter>
    </div>
  );
}

export default App;