import React from 'react';

const BookingService = ({ serviceOption }) => {

    const { name, price } = serviceOption;

    return (
        <>
            <input type="checkbox" id="booking-service" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-service" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-5'>
                        <input type="text" placeholder="Type here" disabled value={price} className="input w-full font-bold text-lg " />
                        <input type="text" placeholder="Please Your Name" className="input w-full" />
                        <input type="text" placeholder="Please Your Phone Numbere" className="input w-full" />
                        <input type="text" placeholder="Please Your Location" className="input w-full" />
                        <input type="text" placeholder="Booking Date" className="input w-full" />
                        <input className='btn btn-accent w-full' type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingService;