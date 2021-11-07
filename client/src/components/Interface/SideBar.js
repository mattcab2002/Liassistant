import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Profile from '../../images/blank-profile-picture.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export const SideBar = () => {
    return (
        <div
            class='d-flex flex-column flex-shrink-0 bg-light p-3'
            style={{ width: '20vw', height: '100vh' }}
        >
            <Link
                to=''
                class='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'
            >
                <span class='fs-4'>Guardian Sidebar</span>
            </Link>
            <hr />
            <ul class='nav nav-pills flex-column mb-auto '>
                <li class='nav-item'>
                    <Link to='/' class='nav-link link-dark' aria-current='page'>
                        <i
                            class='bi bi-house-door-fill'
                            style={{ paddingRight: '4px' }}
                        />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='guardian/dashboard' class='nav-link link-dark'>
                        <i
                            class='bi bi-speedometer2'
                            style={{ paddingRight: '4px' }}
                        ></i>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to='/guardian/screenings' class='nav-link link-dark'>
                        <i
                            class='bi bi-table'
                            style={{ paddingRight: '4px' }}
                        ></i>
                        Weekly Screenings
                    </Link>
                </li>
                <li>
                    <Link to='/guardian/patients' class='nav-link link-dark'>
                        <i
                            class='bi bi-person-circle'
                            style={{ paddingRight: '4px' }}
                        ></i>
                        Patients
                    </Link>
                </li>
                <li>
                    <Link to='/guardian/listen' class='nav-link link-dark'>
                        <i
                            class='bi bi-ear'
                            style={{ paddingRight: '4px' }}
                        ></i>
                        Listen
                    </Link>
                </li>
            </ul>
            <hr />
            <div class='dropdown'>
                <a
                    href='#'
                    class='d-flex align-items-center link-dark text-decoration-none dropdown-toggle'
                    id='dropdownUser2'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                >
                    <img
                        src={Profile}
                        alt=''
                        width='32'
                        height='32'
                        class='rounded-circle me-2'
                    />
                    <strong>Guardian</strong>
                </a>
                <ul
                    class='dropdown-menu text-small shadow'
                    aria-labelledby='dropdownUser2'
                >
                    <li>
                        <a class='dropdown-item' href='#'>
                            Settings
                        </a>
                    </li>
                    <li>
                        <a class='dropdown-item' href='#'>
                            Profile
                        </a>
                    </li>
                    <li>
                        <hr class='dropdown-divider' />
                    </li>
                    <li>
                        <a class='dropdown-item' href='#'>
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
