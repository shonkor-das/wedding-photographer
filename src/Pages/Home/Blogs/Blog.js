import React from 'react';

const Blog = ({ blog }) => {

    const {img, name } = blog;

    return (
        <div className="card card-compact">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default Blog;