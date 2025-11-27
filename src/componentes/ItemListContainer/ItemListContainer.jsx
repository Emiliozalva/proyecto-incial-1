import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../mock/AsyncService'; 
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader'; 
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]);

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            {loading ? <Loader /> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;