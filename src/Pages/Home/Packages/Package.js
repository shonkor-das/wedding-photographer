import React from 'react';
import img13 from '../../../assets/img13.png';

const Package = () => {
    
    return (
        <div className='mt-12'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img13} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">PHOTOGRAPHY PACKAGES</h2>
                    <p>Capture the moment with a professional photoshoot in Maui! <br/> Choose from a 30-minute, 60-minute, or 90-minute photo session.<br/>Great for families, friends, engagements, weddings, pregnancy announcements, events & more!</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white px-5 font-bold">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;