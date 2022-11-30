import React, { useState } from 'react';
import img1 from '../../../assets/service-img/img1.png';
import img2 from '../../../assets/service-img/img2.png';
import img3 from '../../../assets/service-img/img3.png';
import img4 from '../../../assets/service-img/img4.png';
import img5 from '../../../assets/service-img/img5.png';
import img6 from '../../../assets/service-img/img6.png';
import Service from './Service';
import Package from '../Packages/Package';
import BookingService from './BookingService';


const Services = () => {

    const [serviceOption, setServiceOption] = useState(null);

    const servicesData = [
        {
            id: 1,
            price: "$450",
            img: img1,
            name: 'Elopements',
            description: 'If you are planning to elope or have an intimate wedding then I am already your biggest fan, because smart couples know that the small wedding trend is here to stay. We are proud of you for choosing a wedding style that focuses more on celebrating your love, and less on distracting details.'
        },
        {
            id: 2,
            price: "$650",
            img: img2,
            name: 'Simple and Sweet',
            description: 'Wedding planning and location consultation with Rachel ● Instruction on obtaining your marriage license - we will file it for you (Please provide a stamped envelope addressed to your county recorder).● All edited images are delivered by an online gallery.'
        },
        {
            id: 3,
            price: "$350",
            img: img3,
            name: 'Intimate Weddings',
            description: 'Wedding planning and location consultation with Rachel ● Instruction on obtaining your marriage license - we will file it for you ● All edited images are delivered by an online gallery '
        },
        {
            id: 4,
            price: "$400",
            img: img4,
            name: 'All Inclusive - Starting',
            description: 'Wedding planning and location consultation with Rachel ● Instruction on obtaining your marriage license - we will file it for you ● All edited images are delivered by an online gallery '
        },
        {
            id: 5,
            price: "$500",
            img: img5,
            name: 'Boho Picnic',
            description: 'Wedding planning and location consultation with Rachel ● Instruction on obtaining your marriage license - we will file it for you ● All edited images are delivered by an online gallery '
        },
        {
            id: 6,
            price: "$350",
            img: img6,
            name: 'Anything For Love',
            description: 'Wedding planning and location consultation with Rachel ● Instruction on obtaining your marriage license - we will file it for you ● All edited images are delivered by an online gallery '
        },
    ]

    return (
        <div className='mt-12'>
            <div className='text-center mb-8'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-2xl font-semibold'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                        setServiceOption={setServiceOption}
                    ></Service>)
                }
            </div>
            {
                serviceOption &&
                <BookingService
                    serviceOption={serviceOption}
                ></BookingService>
            }
            <Package></Package>
        </div>
    );
};

export default Services;