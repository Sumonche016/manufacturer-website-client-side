import React from 'react';
import Allreview from '../Allreview/Allreview';
import Banner from './Banner/Banner';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Allreview></Allreview>
        </div>
    );
};

export default Home;