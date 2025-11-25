import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <BrowserRouter> { /* Recorda que esta envuelto en app en wrap de borwser router */ }
    <Navbar />
    <Routes>
      { /* Aqui van las rutas */ }
    </Routes>
    <ItemListContainer saludoT="Bienvenido a mi sitio de comercio electronico." />
    </BrowserRouter>
    </>
  )
}

export default App
