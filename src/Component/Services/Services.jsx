import React from 'react';
import image1 from '../../assets/image/service1.jpg';
import image2 from '../../assets/image/service2.jpg';
import image3 from '../../assets/image/service3.jpg';

const Services = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className='text-red-600 text-xl'>What We Do</h3>
                <h1 className='text-5xl font-bold mt-3'>Our Best Services</h1>
            </div>
            <div className='flex flex-col md:flex-row gap-10 mt-16'>
                <div className='flex-1'>
                    <img 
                        src={image2} 
                        alt="Blood Donation" 
                        className='transition-transform duration-300 transform hover:scale-105' // Hover scale effect
                    />
                </div>
                <div className='flex-1 my-auto space-y-6'>
                    <h4 className='text-7xl font-extrabold opacity-10'>01</h4>
                    <h1 className='text-4xl text-red-600 font-bold mt-3'>Blood Donation</h1>
                    <p>Blood donation is a selfless act that saves lives, providing essential blood for surgeries, treatments, and emergencies. Donating is safe, quick, and deeply impactful, benefiting patients in need while boosting the donor’s sense of purpose and community.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse gap-10 mt-16'>
                <div className='flex-1'>
                    <img 
                        src={image1} 
                        alt="Health Check" 
                        className='transition-transform duration-300 transform hover:scale-105' // Hover scale effect
                    />
                </div>
                <div className='flex-1 my-auto space-y-6'>
                    <h4 className='text-7xl font-extrabold opacity-10'>02</h4>
                    <h1 className='text-4xl text-red-600 font-bold mt-3'>Health Check</h1>
                    <p>A health check is a preventive assessment that monitors vital signs, evaluates risk factors, and detects potential health issues early. Regular health checks help maintain overall wellness, support early diagnosis, and promote a proactive approach to a healthier lifestyle.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-10 mt-16'>
                <div className='flex-1'>
                    <img 
                        src={image3} 
                        alt="Blood Bank" 
                        className='transition-transform duration-300 transform hover:scale-105' // Hover scale effect
                    />
                </div>
                <div className='flex-1 my-auto space-y-6'>
                    <h4 className='text-7xl font-extrabold opacity-10'>03</h4>
                    <h1 className='text-4xl text-red-600 font-bold mt-3'>Blood Bank</h1>
                    <p>A blood bank is a facility where donated blood is collected, tested, stored, and distributed for medical use. It ensures a safe and reliable blood supply for patients in need of transfusions during surgeries, emergencies, and treatments for various health conditions.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
