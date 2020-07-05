import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.scss';
function Cart() {
    return (
        <>
            <Button variant="link" className="cart">Carrito</Button>
            <div className="cart-content">
                Todos mis productos
            </div>
        </>
    );
}

export default Cart;
