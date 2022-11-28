import React from 'react';

const Gallery = ({ gallery }) => {

    const { img } = gallery;

    return (
        <div className='mt-8'>
            <div className="card">
                <figure className=''>
                    <img src={img} alt="" />
                </figure>
            </div>
        </div>
    );
};

export default Gallery;