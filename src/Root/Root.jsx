import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div>
            <div className="shadow-lg bg-gray-50 h-20 fixed w-full z-50">
                <Navbar></Navbar>
            </div>
            <div className="pt-20">
                <Outlet></Outlet>
                <ToastContainer />
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;