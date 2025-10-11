import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
  return (
    <div className="item-list-container">
      <h1>{props.saludoT}</h1>
    </div>
  );
};

export default ItemListContainer;