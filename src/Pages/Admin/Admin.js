import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Admin = () => {

    const { data: buyers = [] } = useQuery({
        queryKey: ["buyer"],
        queryFn: () =>
            fetch("https://server-kappa-roan.vercel.app/buyer").then((res) => res.json()),
    });

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://server-kappa-roan.vercel.app/buyer/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => { })

        }
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {buyers.map((b, i) => <thead key={i}>
                        <tr>
                            <th>Role : Buyer</th>
                            <th>Name : {b.name}</th>
                            <th>Email : {b.email}</th>
                            <th><button onClick={() => handleDelete(b._id)}>Delete</button></th>
                        </tr>
                    </thead>)}

                </table>
            </div>
        </div>
    );
};

export default Admin;