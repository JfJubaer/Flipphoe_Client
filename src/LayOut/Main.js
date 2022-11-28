import React from 'react';
import { Outlet } from 'react-router-dom';
import Cat from '../Pages/Shared/Cat';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto grid lg:grid-cols-9 gap-5'>
                <div className='col-span-7'>
                    <Outlet></Outlet>
                </div>
                <div className='lg:grid-cols-3 my-10'>
                    <Cat></Cat>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;