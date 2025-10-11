import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';
import ecomerce from '../../assets/ecommerce.png';
function Navbar(){
    

    return(
        <nav className="navbar">
           { /** nombre y logo, recordar quitar  */}
            <div className="navbar-logo">
            <h1>Sitio de comercio Online</h1>
            <img src={ecomerce} alt="Logo" className="logo"/>
            </div>
            <ul className="listaCategorias"> 
                <li><a href="#">Perifericos</a></li>
                <li><a href="#">Componentes</a></li>
                <li><a href="#">Ofertas</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;