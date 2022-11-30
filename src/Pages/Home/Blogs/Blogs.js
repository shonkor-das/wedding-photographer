import React from 'react';
import img1 from '../../../assets/blog-img/img1.png';
import img2 from '../../../assets/blog-img/img2.png';
import img3 from '../../../assets/blog-img/img3.png';
import img4 from '../../../assets/blog-img/img4.png';
import img5 from '../../../assets/blog-img/img5.png';
import img6 from '../../../assets/blog-img/img6.png';
import img7 from '../../../assets/blog-img/img7.png';
import img8 from '../../../assets/blog-img/img8.png';
import img9 from '../../../assets/blog-img/img9.png';
import img10 from '../../../assets/blog-img/img10.png';
import img11 from '../../../assets/blog-img/img11.png';
import img12 from '../../../assets/blog-img/img12.png';
import Blog from './Blog';

const Blogs = () => {

    const blogsData = [
        {
            id: 1,
            img: img1,
            name: 'A Quirky Vintage Elopement',
        },
        {
            id: 2,
            img: img2,
            name: '7 Reasons To LOVE Rain On Your Wedding Day!',
        },
        {
            id: 3,
            img: img3,
            name: 'What is An SF City Hall Civil Ceremony Wedding REALLY Like?',
        },
        {
            id: 4,
            img: img4,
            name: 'A Quirky Vintage Elopement',
        },
        {
            id: 5,
            img: img5,
            name: 'Trendy SF Elopement Locations!',
        },
        {
            id: 6,
            img: img6,
            name: 'Colorful Moss Beach Elopement!',
        },
        {
            id: 7,
            img: img7,
            name: 'Muir Woods Wedding Hack!',
        },
        {
            id: 8,
            img: img8,
            name: 'Wedding Photography Dream Team Addition',
        },
        {
            id: 9,
            img: img9,
            name: 'The Number 1 Fairytale Elopement Venue In California!',
        },
        {
            id: 10,
            img: img10,
            name: 'A Chinese Wedding: San Francisco Style!',
        },
        {
            id: 11,
            img: img11,
            name: 'Romantic Lighthouse Elopement? YES!!!',
        },
        {
            id: 12,
            img: img12,
            name: 'How To Secretly Propose To Your Girlfriend',
        },
    ]
    
    return (
        <div className='mt-12'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold p-5'>Blog</h2>
                <p>Check out the latest posts full of resources and inspiration showcasing <br /> how other people celebrated their wedding days and get ideas for your <br /> own!</p>
            </div>
            <div className='grid gap-14 grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                {
                    blogsData.map(blog => <Blog
                        key={ blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;