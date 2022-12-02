import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';


const Gallerys = () => {

    const [galleryImage, setGalleryImage] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/galleryImage')
        .then(res => res.json())
        .then(data => setGalleryImage(data))
    }, [])


    return (
        <div className='px-14'>
            <div className='mt-12'>
                <h2 className='text-3xl font-bold text-center'>PHOTO GALLERY</h2>
            </div>
            <div className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                {
                    galleryImage.map((gallery, i) => <Gallery
                        key={i}
                        gallery={gallery}
                    ></Gallery>)
                }
            </div>
            <div className="card-actions justify-center mt-5">
                <Link to='/gallery' className="btn btn-primary text-white text-lg  font-bold px-10 lowercase">See More</Link>
            </div>
        </div>
    );
};

export default Gallerys;