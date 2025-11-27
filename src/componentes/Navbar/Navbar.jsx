import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // <--- IMPORTANTE
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';
import ecomerce from '../../assets/ecommerce.png';

function Navbar(){
    return(
        <nav className="navbar">
            
            <Link to="/" className="navbar-logo">
                <h1>Sitio de comercio Online</h1>
                <img src={ecomerce} alt="Logo" className="logo"/>
            </Link>

            <ul className="listaCategorias"> 
                
                <li><NavLink to="/category/perifericos">Perifericos</NavLink></li>
                <li><NavLink to="/category/componentes">Componentes</NavLink></li>
                <li><NavLink to="/category/monitores">Monitores</NavLink></li>
            </ul>
            
            <CartWidget/>
        </nav>
    )
}

export default Navbar;