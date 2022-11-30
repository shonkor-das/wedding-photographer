import React from 'react';

const ServiceOption = ({ ServiceOption }) => {

    const { name, img, description } = ServiceOption;

    return (
        <div className = "card card-compact shadow-xl" >
            <figure>
                <img src={img} alt="wedding" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <label htmlFor="booking-service" className="btn btn-primary text-white px-5 font-bold">Book Now</label>
                </div>
            </div>
        </div >
    );
};

export default ServiceOption;