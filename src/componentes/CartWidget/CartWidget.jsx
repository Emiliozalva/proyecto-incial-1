import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 
import './CartWidget.css';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className="cart-widget" style={{ display: totalQuantity > 0 ? 'flex' : 'none' }}>
            <FaShoppingCart className="cart-icon" /> 
            <span className="cart-count">{totalQuantity}</span>
        </Link>
    );
  };

export default CartWidget;