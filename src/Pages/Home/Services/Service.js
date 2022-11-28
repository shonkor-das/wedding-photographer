import React from 'react';

const Service = ({ service }) => {

    const { name, description, img } = service;

    return (
        <div className="card card-compact shadow-xl">
            <figure>
                <img src={img} alt="wedding" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white px-5 font-bold">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;