import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='row'>
            <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top px-2">
                <Logo nombreClase='logoNav' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/'} className='nav-link'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Nosotros</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Categoría 1</a></li>
                                <li><a className="dropdown-item" href="#">Categoría 2</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Categoría 3</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="#" className='nav-link'>Contacto</a>
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