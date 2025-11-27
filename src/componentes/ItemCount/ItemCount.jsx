import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    // Inicializamos la cantidad en 1 (o lo que venga en initial)
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        // Solo sumamos si no superamos el stock disponible
        if(quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        // Solo restamos si es mayor a 1 (no queremos vender 0 o -1 productos)
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                {/* Al hacer click, ejecutamos la función onAdd pasándole la cantidad seleccionada */}
                <button 
                    className="Button AddButton" 
                    onClick={() => onAdd(quantity)} 
                    disabled={!stock}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;