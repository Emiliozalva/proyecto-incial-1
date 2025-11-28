import { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext'; 
//import { createOrder } from '../../mock/AsyncService';

import { createOrder } from '../../service/firestoreFunctions';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import Loader from '../Loader/Loader'; 
import './Checkout.css';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const { cart, total, clearCart } = useContext(CartContext);

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!buyer.name || !buyer.phone || !buyer.email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor completa todos los campos',
            });
            return;
        }

        setLoading(true);

        const order = {
            buyer: buyer,
            items: cart,
            total: total,
            date: new Date().toString()
        };

        createOrder(order)
            .then((id) => {
                setOrderId(id);
                clearCart();
                
                // ALERTA DE ÉXITO
                Swal.fire({
                    title: '¡Compra Exitosa!',
                    text: `Tu número de orden es: ${id}`,
                    icon: 'success',
                    confirmButtonText: 'Genial',
                    confirmButtonColor: '#2ecc71'
                });
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    if (loading) {
        return <Loader />; // Usamos el componente Loader
    }

    if (orderId) {
        return (
            <div className="CheckoutContainer">
                <h1>¡Gracias por tu compra! 🎉</h1>
                <h3>Tu número de orden es: <span className="OrderId">{orderId}</span></h3>
                <Link to='/' className="Option">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="CheckoutContainer">
            <h1>Finalizar Compra</h1>
            <form onSubmit={handleSubmit} className="CheckoutForm">
                <label>Nombre Completo</label>
                <input 
                    type="text" 
                    name="name" 
                    value={buyer.name} 
                    onChange={handleInputChange} 
                    placeholder="Ej: Juan Perez"
                />

                <label>Teléfono</label>
                <input 
                    type="number" 
                    name="phone" 
                    value={buyer.phone} 
                    onChange={handleInputChange} 
                    placeholder="Ej: 1122334455"
                />

                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={buyer.email} 
                    onChange={handleInputChange} 
                    placeholder="Ej: juan@email.com"
                />

                <button type="submit" className="ButtonCheckout">Generar Orden</button>
            </form>
        </div>
    );
};

export default Checkout;