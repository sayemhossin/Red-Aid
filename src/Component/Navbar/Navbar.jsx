import React from 'react';
import { MdBloodtype } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const link = <>
        <div className="flex  flex-col text-[15px] lg:flex-row md:text-xl" id="sidebar">
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>Donation Form</NavLink></li>
        </div>
    </>




    return (
        <div className="navbar container mx-auto h-20 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <Link to={'/'} className="flex items-center md:text-5xl cursor-pointer text-red-700 font-extrabold text-xl"><MdBloodtype  className='text-red-800'/>RedAid</Link>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;