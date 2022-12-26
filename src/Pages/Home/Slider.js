import React from 'react';

const Slider = () => {
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
        <div className='my-16 lg:px-20'>
            <h1 className='text-5xl font-bold text-center text-indigo-600'>
                FInd out our exclusive Products
            </h1>
            <div className="carousel w-full rounded-2xl my-5 shadow-2xl h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image[0]} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <button className="btn btn-primary">Explore Now</button>
                        <a href="#slide2" className="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image[1]} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <button className="btn btn-primary">Explore Now</button>
                        <a href="#slide3" className="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image[2]} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <button className="btn btn-primary">Explore Now</button>
                        <a href="#slide1" className="btn btn-circle">❯</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;