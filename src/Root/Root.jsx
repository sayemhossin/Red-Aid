import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <div className="shadow-lg h-20 fixed w-full z-50">
                <Navbar></Navbar>
            </div>
            <div className="pt-20">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;