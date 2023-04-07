import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import TShirt from '../TShirts/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
          toast('Your have already added this T-Shirt')  
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
    };

    const handleRemoveFromCart = _id => {
        const remaining = cart.filter(ts => ts._id !== _id);
        setCart(remaining)
    }
    console.log(tshirts)
    return (
        <div className='home-container'>
            {/* <h1>T-Shirt : {tshirts.length}</h1> */}
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;