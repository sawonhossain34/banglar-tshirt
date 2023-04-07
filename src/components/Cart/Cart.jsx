import React from 'react';
import { parsePath } from 'react-router-dom';

const Cart = ({cart,handleRemovedFromCart}) => {
//    console.log(cart)
    return (
        <div>
            <h2>Order Summary : {cart.length}</h2>
            {
                cart.map(tshirt => <p 
                key={tshirt._id}>
                    {tshirt.name }
                    <button onClick={() => handleRemovedFromCart(tshirt._id)}>X</button>
                    
                    </p>)
            }
        </div>
    );
};

export default Cart;