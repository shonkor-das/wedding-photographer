import React from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blogs'>Blog</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </React.Fragment>
    return (
        <div className="navbar py-5 lg:px-16" data-theme="fantasy">
            <div className="flex-1">
                <img className='h-10 w-14' src={logo} alt=""/>
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