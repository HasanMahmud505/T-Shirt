import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {

    let message;
    if(cart.length === 0){
        message = <h3>Please add some product</h3>
    }
    else{
        message = <div>
            <h3>Thanks for giving your money</h3>
        </div>
    }


    return (
        <div className='cart-container'>
            <h1 className={cart.length === 1 ? "orange" : "yellow"}>Order Summary : {cart.length}</h1>
        <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'blue'}`}>Something</p>


            {cart.length > 2 ? <span className='orange'>Aro Kino</span> : <span>Fokira</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}
                <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length === 2 && <p>Double bonaza !!!</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hailo na</h3> 
            }
        </div>
    );
};

export default Cart;