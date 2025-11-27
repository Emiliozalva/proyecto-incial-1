import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Asegúrate de que esta ruta coincida con donde guardaste tu mock
import { getProductById } from '../../data/asyncMock'; 
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // 1. Obtenemos el ID que viene en la URL (ej: /item/1)
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        // 2. Llamamos a la promesa del mock
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [itemId]); // Importante: se ejecuta cada vez que cambia el ID

    return (
        <div style={{ padding: '2rem' }}>
            {loading ? (
                <h1>Cargando detalle...</h1>
            ) : product ? (
                <ItemDetail {...product} />
            ) : (
                <h1>El producto no existe</h1>
            )}
        </div>
    );
};

export default ItemDetailContainer;