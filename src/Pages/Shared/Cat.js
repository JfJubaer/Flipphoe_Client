import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Link } from 'react-router-dom';

const Cat = () => {


    const cat = [{
        index:
            0,
        picture:
            "https://cdn.mos.cms.futurecdn.net/Gj4BpxWHmrcvZmjaW9nmwf.jpg",
        name:
            "Handsets",
        cat:
            "01"
    }
        ,
    {
        index:
            1,
        picture:
            "https://www.cnet.com/a/img/resize/77ba04c37ce33db90b0c6cbe8b0424ddb9ed8159/hub/2020/11/16/a8e0e691-035a-4298-8366-f3b74e1f3792/img-1759.jpg?auto=webp&fit=crop&height=528&width=940",
        name:
            "Laptops",
        cat:
            "02",
    }
        ,
    {
        index:
            2,
        picture:
            "https://www.cameralabs.com/wp-content/uploads/gk_nsp_cache/hero_NikonZ400f4-5_96815-gk_nsp-3_article.jpg",
        name:
            "Cameras",
        cat:
            "03"
    }]

    return (
        <div className='lg:flex justify-evenly my-10'>
            <div className='lg:ml-10'>
                <Player
                    autoplay
                    loop
                    src="https://assets9.lottiefiles.com/packages/lf20_D0HSc9DlfZ.json"
                    style={{ height: '300px', width: '300px' }}
                >
                </Player>
                <h3 className='text-3xl text-indigo-600 font-extrabold'>Shop on your favorite Category</h3>
            </div>
            <div className='lg:mx-48'>
                <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                    <li className="menu-title">
                        <span>Category</span>
                    </li>
                    {cat.map((c, i) => <div key={i}>
                        <Link to={`/cat/${c.cat}`}>
                            <li>
                                <div class="card card-side bg-base-100 shadow-xl">
                                    <figure><img className='w-36' src={c.picture} alt="" /></figure>
                                    <div class="card-body">
                                        <h2 class="card-title text-indigo-600">{c.name}</h2>

                                    </div>
                                </div>
                            </li></Link>
                    </div>)}

                </ul>
            </div>
        </div>
    );
};

export default Cat;