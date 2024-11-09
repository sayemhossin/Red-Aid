import React from 'react';
import Slider from '../Component/Slider/Slider';
import Card from '../Component/Card/Card';
import Ticket from '../Component/Ticket/Ticket';
import Banner from '../Component/Banner/Banner';
import Stats from '../Component/Stats/Stats';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className='max-w-7xl px-6 lg:px-0 mx-auto'>
                <Ticket></Ticket>
                <Card></Card>
                <Banner></Banner>
                <Stats></Stats>
            </div>
        </div>
    );
};

export default Home;