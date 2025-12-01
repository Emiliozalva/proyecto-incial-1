import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'; 

const Cart = () => {

    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="CartEmpty">
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Ver Productos</Link>
            </div>
        )
    }

    return (
        <div className="CartContainer">
            {cart.map(p => (
                <div key={p.id} className="CartItem">
                    <img src={p.img} alt={p.name} className="CartItemImg"/>
                    <div className="CartItemDetail">
                        <h3>{p.name}</h3>
                        <p>Cantidad: {p.quantity}</p>
                        <p>Precio u.: ${p.price}</p>
                        <p>Subtotal: ${p.price * p.quantity}</p>
                    </div>
                    <button onClick={() => removeItem(p.id)} className="ButtonRemove">X</button>
                </div>
            ))}
            <div className="CartTotal">
                <h3>Total: ${total}</h3>
                
                <div className="CartActions">
                    <button onClick={() => clearCart()} className="ButtonClear">Limpiar Carrito</button>
                    <Link to='/checkout' className="ButtonCheckout">Finalizar Compra</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;