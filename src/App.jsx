import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <ItemListContainer saludoT="Bienvenido a mi sitio de comercio electronico." />
    </>
  )
}

export default App
