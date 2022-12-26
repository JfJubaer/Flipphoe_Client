import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Link } from 'react-router-dom';

const Advertise = () => {
    const categories = [{
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

    const image = categories.map(c => c.picture);

    return (
        <div className='lg:flex my-10 lg:container lg:justify-between'>

            <div className='lg:ml-20 text-5xl font-bold text-center text-indigo-600'>
                <h1>Our dhamaka offer is going on.<br></br>Fast!!!</h1>
                <Player
                    autoplay
                    loop
                    src="https://assets9.lottiefiles.com/packages/lf20_CZva9peGiW.json"
                    style={{ height: '300px', width: '500px' }}
                >
                </Player>
            </div>
            <div className="my-10 lg:ml-20  card w-96 bg-base-100  image-full shadow-2xl">
                <figure><img src={image[2]} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Cameras</h2>
                    <p>Flat 30% off? <br />Yesssss!!!!</p>
                    <div className="card-actions justify-end">
                        <Link to={'products'}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertise;