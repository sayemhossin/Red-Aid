import React from 'react';
import Slider from '../Component/Slider/Slider';
import Card from '../Component/Card/Card';
import Ticket from '../Component/Ticket/Ticket';
import Banner from '../Component/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className='max-w-7xl px-6 lg:px-0 mx-auto'>
                <Ticket></Ticket>
                <Card></Card>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;