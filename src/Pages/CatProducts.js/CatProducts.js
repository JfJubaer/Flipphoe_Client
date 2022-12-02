import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const CatProducts = () => {
    const { products } = useLoaderData();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            {products.length}
        </div>
    );
};

export default CatProducts;