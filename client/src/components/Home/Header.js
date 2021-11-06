import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/Header.css';

export const Header = () => {
    return (
        <section>
            <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        Lia Assistant
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse justify-content-end'
                        id='navbarNav'
                    >
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    aria-current='page'
                                    href='#about'
                                >
                                    About Memory Loss
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    aria-current='page'
                                    href='#our-initiative'
                                >
                                    This Project
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#contact-us'>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};
