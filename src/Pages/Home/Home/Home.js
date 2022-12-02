import React from 'react';

import Banner from '../Banner/Banner';
import Chooses from '../Choose/Chooses';
import Features from '../Feature/Features';
import Gallerys from '../Gallerys/Gallerys';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Services></Services>
            <Gallerys></Gallerys>
            <Chooses></Chooses>
            <Features></Features>
        </div>
    );
};

export default Home;