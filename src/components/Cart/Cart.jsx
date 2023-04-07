import React from 'react';
import "./Cart.css"
import { parsePath } from 'react-router-dom';

const Cart = ({ cart, handleRemovedFromCart }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Pleace add some products</p>
    }
    else {
        message = <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for giving</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length > 2 ? "red" : 'blue'}>Order Summary : {cart.length}</h2>
            
            {cart.length > 2 ? <p>aro kino</p> : <p>fokira</p>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemovedFromCart(tshirt._id)}>X</button>

                </p>)
            }
            {
                cart.length === 2 && <p>Duble bonanzara</p>
            }
            {
                cart.length === 3 || <p>tinta to hoilo na!!!</p>
            }
        </div>
    );
};

//CONDITIONAL RANDERING
// 1 if / else conditional randering
// 2 ternary operator randaring
// 3 logical condition && true 
// 4 logical condition || false

// CONDITIONAL CSS CLASS
// 1 ternary css add 
// 2 dynamic css add

export default Cart;