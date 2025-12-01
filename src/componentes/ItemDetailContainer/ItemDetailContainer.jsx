import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../service/firestoreFunctions';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader'; 
import './ItemDetailContainer.css';

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
    if(loading) {
        return <Loader />;
    }
    if(product) {
        return (
            <div className='ItemDetailContainer'>
                <ItemDetail {...product} />
            </div>
        );
    }
    return (
        <div className='ItemDetailContainer error-container'>
            <h2>¡Ops! El producto no existe</h2>
            <p>El ID que buscas no se encuentra en nuestra base de datos.</p>
        </div>
    );
};

export default ItemDetailContainer;