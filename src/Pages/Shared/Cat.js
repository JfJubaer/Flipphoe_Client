import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Cat = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories').then(res => res.json())

    })

    return (
        <div>
            <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                <li className="menu-title">
                    <span>Category</span>
                </li>
                {categories.map((c, i) => <div key={i}>
                    <Link to={`/cat/${c._id}`}>
                        <li>
                            <div class="card card-side bg-base-100 shadow-xl">
                                <figure><img className='w-36' src={c.picture} alt="" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">{c.name}</h2>

                                </div>
                            </div>
                        </li></Link>
                </div>)}

            </ul>
        </div>
    );
};

export default Cat;