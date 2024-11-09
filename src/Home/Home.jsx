import React from 'react';
import Slider from '../Component/Slider/Slider';
import Card from '../Component/Card/Card';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className='max-w-7xl px-6 lg:px-0 mx-auto'>
                <Card></Card>
            </div>
        </div>
    );
};

export default Home;