import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Product = ({ p }) => {
    const { name, picture, originalPrice, resalePrice, location, date, isVerified, seller } = p;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl ">
                <figure><img className='h-60' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>originalPrice : {originalPrice}$</p>
                    <p>resalePrice : {resalePrice}$</p>
                    <p>location : {location}</p>
                    <p className='flex items-center'>seller : {seller} {isVerified && <span className='text-green-600'>  <FaCheck /></span>}</p>
                    <p>date : {date}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;