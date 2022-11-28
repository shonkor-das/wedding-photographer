import React from 'react';

const Feature = ({ feature }) => {

    const { img } = feature;

    return (
        <div className='mt-3'>
            <div className="card">
                <img className='h-56' src={img} alt="" />
            </div>
        </div>
    );
};

export default Feature;