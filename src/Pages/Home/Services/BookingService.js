import React, {useContext} from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingService = ({ ServiceOption, setServiceOption }) => {

    const { name, price } = ServiceOption;
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const bookingName = form.bookingName.value;
        const price = form.price.value;
        
        var select = document.getElementById('location');
        var value = select.options[select.selectedIndex].value;
        console.log(value);
        // const location = form.location.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const date = form.date.value;

        const booking = {
            bookingName,
            price,
            value,
            name,
            phone,
            date
        }
      
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                setServiceOption(null);
                toast.success('Booking confiremed')
            }
        })

        // console.log(bookingName, price, value, name, phone, date);
    }

    return (
        <>
            <input type="checkbox" id="booking-service" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-service" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-5'>
                        <input name="bookingName" type="text" disabled value={name} className="text-2xl font-bold" />
                        <input name="price" type="text" placeholder="Type Your Budget" value={price} className="input w-full font-bold text-lg" />
                        <select id="location" className="select select-bordered w-full">
                            <option value="" >Select Your Location</option>
                            <option value="" >Dhaka</option>
                            <option value="" >Chittagong</option>
                            <option value="" >Bandarban</option>
                            <option value="" >Rangamati</option> 
                            <option value="">Cox's Bazar</option>
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Please Your Name" className="input w-full" required />
                        <input Email="email" type="text" defaultValue={user?.email} disabled placeholder="Type Your Email" className="input w-full" required />
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