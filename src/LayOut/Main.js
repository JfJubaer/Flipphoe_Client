import React from 'react';
import { Outlet } from 'react-router-dom';
import Bio from '../Pages/Shared/Bio';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Bio></Bio>
            <Footer></Footer>
        </div>
    );
};

export default Main;