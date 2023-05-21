import React from 'react';
import logo from './logoWeb.png';
import './Logo.css';

const Logo = ({ nombreClase }) => {
    return (
        <>
            <img className={nombreClase} src={logo} alt="logo" />
        </>
    );
};

export default Logo;