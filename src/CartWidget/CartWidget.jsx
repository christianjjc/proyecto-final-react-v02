import React from 'react';
import carrito from './basket.svg';

const CartWidget = () => {
    return (
        <button className="btn btn-warning" type="button">
            <img src={carrito} alt="carrito" />
        </button>
    );
};

export default CartWidget;