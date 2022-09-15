import React from 'react';
import Allreview from '../Allreview/Allreview';
import Choose from '../Choose/Choose';
import GetTouch from '../GetTouch/GetTouch';
import Banner from './Banner/Banner';
import Summary from './Summary';
// import Tools from './Tools/Tools';
import Itemshow from './ItemShow/Itemshow';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            {/* <Tools></Tools> */}
            <Itemshow></Itemshow>
            <Allreview></Allreview>
            <Summary></Summary>
            <Choose></Choose>
            <GetTouch></GetTouch>
        </div>
    );
};

export default Home;