import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Slider = () => {
    const { data: categories = [], refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('data.json').then(res => res.json())

    })

    const image = categories.map(c => c.picture);
    return (
        <div>
            <div className="carousel w-full rounded-2xl my-5 shadow-2xl h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image[0]} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <button className="btn btn-primary">Explore Now</button>
                        <a href="#slide2" className="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image[1]} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <button className="btn btn-primary">Explore Now</button>
                        <a href="#slide3" className="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image[2]} className="w-full" />
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