import React from 'react';
import img7 from '../../../assets/service-img/img7.png';

const Package = () => {

    return (
        <div className='mt-20'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img7} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">PHOTOGRAPHY PACKAGES</h2>
                    <p>Capture the moment with a professional photoshoot in Maui! <br /> Choose from a 30-minute, 60-minute, or 90-minute photo session.<br />Great for families, friends, engagements, weddings, pregnancy announcements, events & more!</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="booking-service" className="btn btn-primary text-white px-5 font-bold">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;