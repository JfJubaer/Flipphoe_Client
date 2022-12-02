import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Orders from './Orders';

const MyOrders = () => {
  const data = useLoaderData();
  return (
    <div className="overflow-x-auto my-10">
      <table className="table w-full">
        {data.map((o, i) => <Orders key={i}
          o={o}
        ></Orders>)}
      </table>
    </div>
  );
};

export default MyOrders;
