import React from 'react';

const Service = ({ service, setServiceOption }) => {

    const { name, description, img, price } = service;

    return (
        <div className="card card-compact shadow-xl">
            <figure>
                <img src={img} alt="wedding" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between mt-5">
                    <div>
                        <p className='btn px-8'>{price}</p>
                    </div>
                    <label
                        htmlFor="booking-service"
                        className="btn btn-primary text-white px-5 font-bold"
                        onClick={() => setServiceOption(service)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Service;