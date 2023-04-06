import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    
    return (
        <div>
            <h1>T-Shirt : {tshirts.length}</h1>
        </div>
    );
};

export default Home;