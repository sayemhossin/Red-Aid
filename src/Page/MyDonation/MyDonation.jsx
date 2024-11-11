import React, { useEffect, useState } from 'react';

const MyDonation = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const donationData = JSON.parse(localStorage.getItem('donationData')) || [];
        setDonations(donationData);
    }, []);

    return (
        <div className="bg-gray-100">
            {donations.length === 0 ? (
                <div className="min-h-screen flex items-center justify-center text-center p-8">
                    <div>
                        <h2 className="text-4xl font-bold text-red-600">No Donations Found</h2>
                        <p className="mt-4 text-lg text-gray-600">It looks like there are no donations yet. Please consider making one!</p>
                    </div>
                </div>
            ) : (
                <div className="p-6 lg:pb-52 lg:pt-16 w-full max-w-screen-xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-center mb-10 lg:mb-16">Your Donations</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {donations.map((donation) => (
                            <div key={donation.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-300">
                                <h3 className="text-2xl font-semibold text-center mb-4">Donation Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <strong>Blood Group: </strong>
                                        <span className="text-lg text-gray-700">{donation.bloodGroup}</span>
                                    </div>
                                    <div>
                                        <strong>Name: </strong>
                                        <span className="text-lg text-gray-700">{donation.firstName} {donation.lastName}</span>
                                    </div>
                                    <div>
                                        <strong>Email: </strong>
                                        <span className="text-lg text-gray-700">{donation.email}</span>
                                    </div>
                                    <div>
                                        <strong>Address: </strong>
                                        <span className="text-lg text-gray-700">{donation.address}</span>
                                    </div>
                                    <div>
                                        <strong>Description: </strong>
                                        <p className="text-lg text-gray-700">{donation.description}</p>
                                    </div>
                                    <div>
                                        <strong>Date: </strong>
                                        <span className="text-lg text-gray-700">{donation.donationDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyDonation;
