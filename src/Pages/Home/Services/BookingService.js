import React from 'react';

const BookingService = ({ serviceOption, setServiceOption }) => {

    const { name, price } = serviceOption;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const bookingName = form.bookingName.value;
        const price = form.price.value;
        const location = form.location.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const date = form.date.value;

        console.log(bookingName, price, location, name, phone, date);

        setServiceOption(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-service" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-service" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-5'>
                        <input name="bookingName" type="text" disabled value={name} className="text-2xl font-bold" />
                        <input name="price" type="text" placeholder="Type here" disabled value={price} className="input w-full font-bold text-lg" />
                        <select name="location" className="select select-bordered w-full">
                            <option selected>Select Your Location</option>
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                            <option>Bandarban</option>
                            <option>Rangamati</option>
                            <option>Cox's Bazar</option>
                        </select>
                        <input name="name" type="text" placeholder="Please Your Name" className="input w-full" required />
                        <input name="phone" type="text" placeholder="Please Your Phone Number" className="input w-full" required />
                        <input name="date" type="date" placeholder="Booking Date" className="input w-full" />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingService;