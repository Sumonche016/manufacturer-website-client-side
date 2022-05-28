import React from 'react';
import Allreview from '../Allreview/Allreview';
import Banner from './Banner/Banner';
import Summary from './Summary';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Allreview></Allreview>
            <Summary></Summary>
        </div>
    );
};

export default Home;