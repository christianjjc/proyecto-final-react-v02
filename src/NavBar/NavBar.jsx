import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

const NavBar = () => {
    return (
        <div className='row'>
            <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top px-2">
                <a className="navbar-brand" href="#">
                    <Logo nombreClase='logoNav' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contáctanos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className='d-none d-sm-block'>
                    <CartWidget />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;