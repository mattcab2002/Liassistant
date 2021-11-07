import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/Screenings.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export const Screenings = () => {
    return (
        <div className='p-3 mt-5'>
            <ul>
                <li
                    className='bg-light mb-3 p-3'
                    style={{ width: '75vw', borderRadius: '12px' }}
                >
                    Week 1 Screening
                    <span
                        style={{
                            float: 'right',
                        }}
                    >
                        <span className='complete'>Complete</span>
                        <i
                            className='bi bi-check-circle complete'
                            style={{ marginLeft: '8px' }}
                        />
                    </span>
                </li>
                <li
                    className='bg-light mb-3 p-3'
                    style={{ width: '75vw', borderRadius: '12px' }}
                >
                    Week 2 Screening
                    <span
                        style={{
                            float: 'right',
                        }}
                    >
                        <span className='complete'>Complete</span>
                        <i
                            className='bi bi-check-circle complete'
                            style={{ marginLeft: '8px' }}
                        />
                    </span>
                </li>
                <Link
                    to='screenings/complete-screening'
                    style={{ textDecoration: 'none' }}
                >
                    <li
                        className='bg-light mb-3 p-3'
                        style={{ width: '75vw', borderRadius: '12px' }}
                    >
                        Week 3 Screening
                        <span
                            style={{
                                float: 'right',
                            }}
                        >
                            <span className='incomplete'>To Complete</span>
                            <i
                                className='bi bi-x-circle incomplete'
                                style={{ marginLeft: '8px' }}
                            />
                        </span>
                    </li>
                </Link>
                <li
                    className='bg-light mb-3 p-3'
                    style={{ width: '75vw', borderRadius: '12px' }}
                >
                    Week 4 Screening
                    <span
                        style={{
                            float: 'right',
                        }}
                    >
                        <span>Opens 11/12/2021</span>
                        <i class='bi bi-clock' style={{ marginLeft: '8px' }} />
                    </span>
                </li>
                <li
                    className='bg-light mb-3 p-3'
                    style={{ width: '75vw', borderRadius: '12px' }}
                >
                    Week 5 Screening
                    <span
                        style={{
                            float: 'right',
                        }}
                    >
                        <span>Opens 11/19/2021</span>
                        <i class='bi bi-clock' style={{ marginLeft: '8px' }} />
                    </span>
                </li>
                <li
                    className='bg-light mb-3 p-3'
                    style={{ width: '75vw', borderRadius: '12px' }}
                >
                    Week 6 Screening
                    <span
                        style={{
                            float: 'right',
                        }}
                    >
                        <span>Opens 11/26/2021</span>
                        <i class='bi bi-clock' style={{ marginLeft: '8px' }} />
                    </span>
                </li>
            </ul>
        </div>
    );
};
