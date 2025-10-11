import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import './CartWidget.css';


function CartWidget() {
    return(
        <div className="cartWidget">
            <img src="" alt="Carrito" className="iconoCarrito"/>
            <span className="cantidadProductos">0</span>
        </div>
    )
}
export default CartWidget;