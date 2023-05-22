import React from 'react';
import logo from './logoWeb.png';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = ({ nombreClase }) => {
    return (
        <>
            <Link to={'/'} className='navbar-brand'>
                <img className={nombreClase} src={logo} alt="logo" />
            </Link>
        </>
    );
};

export default Logo;