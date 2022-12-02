import React from 'react';

const Orders = ({ o }) => {
    return (
        <thead>
            <tr>
                <th></th>

                <th>Product : {o.name}</th>
                <th><img src={o.picture} className='w-20' alt="Avatar Tailwind CSS Component" /></th>
            </tr>
        </thead>
    );
};

export default Orders;