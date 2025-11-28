import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
            <h3>Cargando...</h3>
        </div>
    )
}

export default Loader;