import React from 'react';

const Bio = () => {
    return (
        <div>
            <section
                className="relative bg-[url(https://assets.thehansindia.com/h-upload/2022/05/30/1600x960_1295133-mobiles-11.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-indigo-700">
                                Forever Device.
                            </strong>
                        </h1>



                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Bio;