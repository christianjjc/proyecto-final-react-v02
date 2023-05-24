import React, { useContext } from 'react';
import carrito from './basket.svg';
import CartContext from '../../store/cart-context';

const CartWidget = () => {
    const cartCtx = useContext(CartContext);
    return (
        <button type="button" className="btn btn-warning position-relative">
            <img src={carrito} alt="carrito" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCtx.getCartQuantity()}
                <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    );
};

export default CartWidget;