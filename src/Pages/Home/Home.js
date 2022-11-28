import React from 'react';
import Advertise from './Advertise';
import Info from './Info';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Info></Info>
            <Slider></Slider>
            <Advertise ></Advertise>
        </div>
    );
};

export default Home;