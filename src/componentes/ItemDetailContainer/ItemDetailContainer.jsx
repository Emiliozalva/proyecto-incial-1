import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../mock/AsyncService';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
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

    }, [itemId]);

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