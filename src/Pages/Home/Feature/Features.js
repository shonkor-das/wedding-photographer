import React from 'react';
import img1 from '../../../assets/work-img/img1.png';
import img2 from '../../../assets/work-img/img2.png';
import img3 from '../../../assets/work-img/img3.png';
import img4 from '../../../assets/work-img/img4.png';
import Feature from './Feature';

const Features = () => {

    const featureData = [
        {
            id: 1,
            img: img1,
        },
        {
            id: 2,
            img: img2,
        },
        {
            id: 3,
            img: img3,
        },
        {
            id: 4,
            img: img4,
        },
    ]

    return (
        <div className='mt-12'>
            <div className='mb-5'>
                <h2 className='text-4xl font-semibold'>Featured Work</h2>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    featureData.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <div className="card-actions justify-end mt-8">
                <button className="btn btn-primary px-8 text-white font-bold">View More</button>
            </div>
        </div>
    );
};

export default Features;