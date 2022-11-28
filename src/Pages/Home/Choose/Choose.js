import React from 'react';

const Choose = ({choose}) => {

    const {img, name, discription} = choose;
    return (
        <div>
            <div className="card w-96 ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold pb-8">{name}</h2>
                    <p>{discription}</p>
                </div>
            </div>
        </div>

    );
};

export default Choose;