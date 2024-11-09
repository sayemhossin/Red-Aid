import React from 'react';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#1A1A1D] text-white p-10 md:p-20">
                <nav>
                    <h6 className="footer-title text-xl">About Us</h6>
                    <p className='w-60'>We're a dedicated blood donation platform, connecting donors with those in need to save lives and promote health within our communities.</p>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl">Services</h6>
                    <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Blood Donation</h4>
                    <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Health Check</h4>
                    <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Donate Process</h4>
                    <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Blood Bank</h4>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl">Company</h6>
                    <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> About us</h4>    <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Contact</h4>    <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Latest News</h4>
                    <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Press kit</h4>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl">Legal</h6>
                    <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Terms of use</h4> <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Privacy policy</h4> <h4 className='flex items-center font-semibold'><MdKeyboardDoubleArrowRight className='text-red-700 text-2xl' /> Cookie policy</h4>
                </nav>
            </footer>
            <footer className="footer bg-[#1A1A1D] text-base-content border-base-300 border-t md:px-20 pt-5 md:py-10 px-10">
                <form>
                    <fieldset>
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input w-1/2 md:w-full input-bordered join-item" />


                            <button className="btn bg-red-700 text-white relative overflow-hidden group join-item">
                                <span className="absolute inset-0 bg-black transition-all duration-300 group-hover:w-full w-0 z-10"></span>
                                <span className="flex items-center gap-2 relative z-20">Subscribe</span>
                            </button>
                        </div>
                    </fieldset>
                </form>
                <nav className="md:place-self-center md:justify-self-end text-white mx-auto">
                    <div className="grid grid-flow-col gap-4 pb-10 md:pb-0">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>

            </footer>
            <footer className="footer footer-center bg-black py-10 p-4 text-white">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by RedAid Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;