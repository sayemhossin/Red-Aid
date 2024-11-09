import React from 'react';
import Slider from '../Component/Slider/Slider';
import Card from '../Component/Card/Card';
import Ticket from '../Component/Ticket/Ticket';
import Banner from '../Component/Banner/Banner';
import Stats from '../Component/Stats/Stats';
import Services from '../Component/Services/Services';
import Call from '../Component/Call/Call';
import Campaigns from '../Component/Campaigns/Campaigns';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className='max-w-7xl px-6 lg:px-0 mx-auto'>
                <Ticket></Ticket>
                <Card></Card>
                <Banner></Banner>
                <Stats></Stats>
                <Services></Services>
                <Call></Call>
                <Campaigns></Campaigns>
            </div>
        </div>
    );
};

export default Home;