import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Info = () => {
    return (
        <div className='lg:flex items-center'>
            <div>
                <h1
                    class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                >
                    Welcome to our mini-mart.

                    <span class="sm:block"> Find your favorite device at reasonable cost </span>
                </h1>
            </div>
            <div>
                <Player
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_Au6z826BEy.json"
                    style={{ height: '300px', width: '300px' }}
                >
                </Player>
            </div>
        </div>
    );
};

export default Info;