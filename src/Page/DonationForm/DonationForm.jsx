import React, { useState } from 'react';
import image1 from '../../assets/image/formbanner.jpg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const DonationForm = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        bloodGroup: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        description: '',
        donationDate: new Date().toLocaleDateString()
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const existingData = JSON.parse(localStorage.getItem('donationData')) || [];
        const uniqueId = new Date().getTime().toString();
        const newDonation = { ...formData, id: uniqueId };
        existingData.push(newDonation);
        localStorage.setItem('donationData', JSON.stringify(existingData));
        toast.success('Submitted Successfully');
        navigate('/mydonation')
    };

    return (
        <div>
            <div className="relative">
                <img
                    className="w-full h-[300px] object-cover"
                    src={image1}
                    alt="services"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">Donate Now</h1>
                </div>
            </div>
            <h1 className='text-4xl md:text-5xl font-extrabold mt-20 mb-10 text-center'>Make a Donation</h1>
            <form onSubmit={handleSubmit} className='mb-20 max-w-4xl mx-auto'>
                <div className="bg-base-200 border border-black md:p-10 p-6">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">Your Blood Donation</h1>
                    <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        className="select text-gray-700 font-bold w-full border border-black rounded-none p-2"
                    >
                        <option value="" disabled selected>Select Your Blood Group</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>
                </div>
                <div className='p-10 space-y-7 border border-black mt-10 bg-base-200'>
                    <label className="text-2xl font-semibold mb-4">Details</label>

                    <div className='flex gap-5 flex-col md:flex-row'>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full border border-black rounded-none p-4"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full border border-black rounded-none p-4" required
                        />
                    </div>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-black rounded-none p-4" required
                        />

                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border border-black rounded-none p-4" required
                        />
                    </div>

                    <textarea
                        placeholder="Case Description..."
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border border-black rounded-none p-4" required
                        rows="4"
                    ></textarea>
                    <button type='submit' className="bg-red-700 text-white px-12 py-3 text-xl relative overflow-hidden group">
                        <span className="absolute inset-0 bg-black transition-all duration-300 group-hover:w-full w-0 z-10"></span>
                        <span className="flex items-center gap-2 relative z-20">Donate Now</span>
                    </button>
                </div>

            </form >
        </div >
    );
};

export default DonationForm;
