import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Service</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About</Link></li>
        {user?.uid ?
            <>
                <li><Link to='/reviews'>Reviews</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar py-5 px-5 lg:px-14" data-theme="fantasy">
            <div className="flex-1">
                <img className='h-16 w-20 mr-3' src={logo} alt="" />
                <Link to='/login' className='text-2xl font-bold text-purple-600'>Wedding Photographer</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;