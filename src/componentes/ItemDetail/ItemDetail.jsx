import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        console.log(`Cantidad agregada: ${quantity}`);
        // Aquí iría la lógica del Context (próximamente)
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