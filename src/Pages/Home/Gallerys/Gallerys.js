import React from 'react';
import image1 from '../../../assets/images/image1.png';
import image2 from '../../../assets/images/image2.png';
import image3 from '../../../assets/images/image3.png';
import image4 from '../../../assets/images/image4.png';
import image5 from '../../../assets/images/image5.png';
import image6 from '../../../assets/images/image6.png';
import image7 from '../../../assets/images/image7.png';
import image8 from '../../../assets/images/image8.png';
import image9 from '../../../assets/images/image9.png';
import image10 from '../../../assets/images/image10.png';
import image11 from '../../../assets/images/image11.png';
import image12 from '../../../assets/images/image12.png';
import image13 from '../../../assets/images/image13.png';
import image14 from '../../../assets/images/image14.png';
import image15 from '../../../assets/images/image15.png';
import image16 from '../../../assets/images/image16.png';
import image17 from '../../../assets/images/image17.png';
import image18 from '../../../assets/images/image18.png';
import Gallery from './Gallery';


const Gallerys = () => {

    const galleryImage = [
        {
            id: 1,
            img: image1,
        },
        {
            id: 2,
            img: image2,
        },
        {
            id: 3,
            img: image3,
        },
        {
            id: 4,
            img: image4,
        },
        {
            id: 5,
            img: image5,
        },
        {
            id: 6,
            img: image6,
        },
        {
            id: 7,
            img: image7,
        },
        {
            id: 8,
            img: image8,
        },
        {
            id: 9,
            img: image9,
        },
        {
            id: 10,
            img: image10,
        },
        {
            id: 11,
            img: image11,
        },
        {
            id: 12,
            img: image12,
        },
        {
            id: 13,
            img: image13,
        },
        {
            id: 14,
            img: image14,
        },
        {
            id: 15,
            img: image15,
        },
        {
            id: 16,
            img: image16,
        },
        {
            id: 17,
            img: image17,
        },
        {
            id: 18,
            img: image18,
        },
    ]

    return (
        <div>
            <div className='mt-12'>
                <h2 className='text-3xl font-bold text-center'>PHOTO GALLERY</h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                {
                    galleryImage.map((gallery, i) => <Gallery
                        key={i}
                        gallery={gallery}
                    ></Gallery>)
                }
            </div>
            <div className="card-actions justify-center mt-5">
                <button className="btn btn-primary text-white text-lg  font-bold px-10 lowercase">See More</button>
            </div>
        </div>
    );
};

export default Gallerys;