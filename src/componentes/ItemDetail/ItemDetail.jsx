import { useState, useContext } from 'react'; // 1. Importar useContext
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext'; // 2. Importar el Contexto
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    // 3. Traemos la función addItem del contexto
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        // 4. Armamos el objeto del producto que vamos a guardar
        const item = {
            id, 
            name, 
            price,
            img // Opcional, sirve para mostrar la foto en el carrito después
        };

        // 5. Ejecutamos la función del contexto
        addItem(item, quantity);
    };

    return (
        <article className="CardItemDetail">
            <header className="HeaderDetail">
                <h2 className="ItemHeaderDetail">{name}</h2>
            </header>
            
            <div className="DetailContent">
                <picture className="ItemImgContainer">
                    <img src={img} alt={name} className="ItemImgDetail" />
                </picture>
                
                <section className="InfoContainer">
                    <p className="InfoDetail category">Categoría: {category}</p>
                    <p className="InfoDetail description">{description}</p>
                    <p className="InfoDetail price">${price}</p>
                    <p className="InfoDetail stock">Stock disponible: {stock}</p>
                </section>
            </div>

            <footer className="ItemFooterDetail">
                {quantityAdded > 0 ? (
                    <Link to='/cart' className='OptionDetail'>Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;