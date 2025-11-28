import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'; 
const Item = ({ id, name, img, price, stock }) => {
    
    return (
        <article className="CardItem" style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <header className="Header">
                <h3 className="ItemHeader" style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>
                    {name}
                </h3>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" style={{ width: '150px', height: '150px', objectFit: 'contain', marginBottom: '10px' }}/>
            </picture>
            <section>
                <p className="Info" style={{ margin: '5px 0' }}>
                    Precio: <strong>${price}</strong>
                </p>
                <p className="Info" style={{ fontSize: '0.8rem', color: '#666' }}>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter" style={{ marginTop: '10px' }}>
                <Link to={`/item/${id}`} className="Option" style={{ backgroundColor: '#333', color: 'white', padding: '8px 15px', borderRadius: '5px', textDecoration: 'none' }}>
                    Ver detalle
                </Link>
            </footer>
        </article>
    )
}

export default Item;