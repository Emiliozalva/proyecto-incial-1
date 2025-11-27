import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'; // Ahora creamos los estilos

const Cart = () => {
    // Traemos todo lo necesario del contexto
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext);

    // ESCENARIO 1: El carrito está vacío
    if (totalQuantity === 0) {
        return (
            <div className="CartEmpty">
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Ver Productos</Link>
            </div>
        )
    }

    // ESCENARIO 2: Hay productos
    return (
        <div className="CartContainer">
            {/* Listado de productos */}
            {cart.map(p => (
                <div key={p.id} className="CartItem">
                    <img src={p.img} alt={p.name} className="CartItemImg"/>
                    <div className="CartItemDetail">
                        <h3>{p.name}</h3>
                        <p>Cantidad: {p.quantity}</p>
                        <p>Precio u.: ${p.price}</p>
                        <p>Subtotal: ${p.price * p.quantity}</p>
                    </div>
                    {/* Botón para borrar UN solo producto */}
                    <button onClick={() => removeItem(p.id)} className="ButtonRemove">X</button>
                </div>
            ))}

            {/* Resumen final */}
            <div className="CartTotal">
                <h3>Total: ${total}</h3>
                
                <div className="CartActions">
                    {/* Botón para vaciar todo */}
                    <button onClick={() => clearCart()} className="ButtonClear">Limpiar Carrito</button>
                    
                    {/* Botón para finalizar compra (Nos llevará al Checkout) */}
                    <Link to='/checkout' className="ButtonCheckout">Finalizar Compra</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;