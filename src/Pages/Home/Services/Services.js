import React, { useEffect, useState } from 'react';
import Service from './Service';
import Package from '../Packages/Package';
import BookingService from './BookingService';
import { Link } from 'react-router-dom';


const Services = () => {

    const [serviceOption, setServiceOption] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/serviceOptions')
        .then(res => res.json())
        .then(data => setServiceOption(data))
    }, [])


    return (
        <div className='mt-12 px-14'>
            <div className='text-center mb-8'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-2xl font-semibold'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceOption.map(service => <Service
                        key={service.id}
                        service={service}
                        ServiceOption={setServiceOption}
                    ></Service>)
                }
            </div>

            {
                serviceOption &&
                <BookingService
                    serviceOption={serviceOption}
                    ServiceOption={setServiceOption}
                ></BookingService>
            }

            <div className="card-actions justify-center mt-8">
                <Link to='/services' htmlFor="booking-service" className="btn btn-info text-white px-12 font-bold">See More</Link>
            </div>

            <Package></Package>
        </div>
    );
};

export default Services;