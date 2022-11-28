import React from 'react';
import img5 from '../../../assets/img5.png';
import img6 from '../../../assets/img6.png';
import img7 from '../../../assets/img7.png';
import img8 from '../../../assets/img8.png';
import img10 from '../../../assets/img10.png';
import img11 from '../../../assets/img11.png';
import Service from './Service';
import Package from '../Packages/Package';


const Services = () => {

    const servicesData = [
        {
            id: 1,
            img: img5,
            name: 'Elopements',
            description: 'If you are planning to elope or have an intimate wedding then I am already your biggest fan, because smart couples know that the small wedding trend is here to stay. We are proud of you for choosing a wedding style that focuses more on celebrating your love, and less on distracting details.'
        },
        {
            id: 2,
            img: img6,
            name: 'Simple and Sweet',
            description: 'Wedding planning and location consultation with Rachel ● Instruction on obtaining your marriage license - we will file it for you (Please provide a stamped envelope addressed to your county recorder).● All edited images are delivered by an online gallery.'
        },
        {
            id: 3,
            img: img7,
            name: 'Intimate Weddings',
            description: 'Wedding planning and location consultation with Rachel ● Instruction on obtaining your marriage license - we will file it for you ● All edited images are delivered by an online gallery '
        },
        {
            id: 4,
            img: img8,
            name: 'All Inclusive - Starting',
            description: 'Wedding planning and location consultation with Rachel ● Instruction on obtaining your marriage license - we will file it for you ● All edited images are delivered by an online gallery '
        },
        {
            id: 5,
            img: img10,
            name: 'Boho Picnic',
            description: 'Wedding planning and location consultation with Rachel ● Instruction on obtaining your marriage license - we will file it for you ● All edited images are delivered by an online gallery '
        },
        {
            id: 6,
            img: img11,
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
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Package></Package>
        </div>
    );
};

export default Services;