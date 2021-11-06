import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/Patients.css';
import Profile from '../../images/blank-profile-picture.png';

export const Patients = () => {
    return (
        <div className='p-3 mt-5'>
            <ul>
                <li>
                    <div class='card mb-3'>
                        <div class='row no-gutters'>
                            <div class='col-md-4'>
                                <img
                                    src={Profile}
                                    class='card-img'
                                    alt='Patient Image'
                                />
                            </div>
                            <div class='col-md-8'>
                                <div
                                    class='card-body'
                                    style={{ marginLeft: '-140px' }}
                                >
                                    <h5 class='card-title'>Patient #1</h5>
                                    <div
                                        className='d-flex'
                                        style={{
                                            marginTop: '40px',
                                            fontSize: '1.2em',
                                        }}
                                    >
                                        <div className='d-flex flex-column'>
                                            <p class='card-text'>Sex: Male</p>
                                            <p class='card-text'>
                                                Guardian/Emergency Contact:
                                                5149999999
                                            </p>
                                            <p class='card-text'>
                                                Hobbies: Chess
                                            </p>
                                            <p class='card-text'>
                                                Type of Memory Loss: Retrograde
                                                Amnesia
                                            </p>
                                        </div>
                                        <div
                                            className='d-flex flex-column'
                                            style={{ marginLeft: '40px' }}
                                        >
                                            <p class='card-text'>
                                                Insurance: Sun Life
                                            </p>
                                            <p class='card-text'>
                                                Phone Number: 99999999
                                            </p>
                                            <p class='card-text'>
                                                Address: 12 Pine Street
                                            </p>
                                            <p class='card-text'>
                                                Family Doctor: Dr Lee
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class='card mb-3'>
                        <div class='row no-gutters'>
                            <div class='col-md-4'>
                                <img
                                    src={Profile}
                                    class='card-img'
                                    alt='Patient Image'
                                />
                            </div>
                            <div class='col-md-8'>
                                <div
                                    class='card-body'
                                    style={{ marginLeft: '-140px' }}
                                >
                                    <h5 class='card-title'>Patient #2</h5>
                                    <div
                                        className='d-flex'
                                        style={{
                                            marginTop: '40px',
                                            fontSize: '1.2em',
                                        }}
                                    >
                                        <div className='d-flex flex-column'>
                                            <p class='card-text'>Sex: Female</p>
                                            <p class='card-text'>
                                                Guardian/Emergency Contact:
                                                5149999999
                                            </p>
                                            <p class='card-text'>
                                                Hobbies: Checkers
                                            </p>
                                            <p class='card-text'>
                                                Type of Memory Loss: Progressive
                                                Amnesia
                                            </p>
                                        </div>
                                        <div
                                            className='d-flex flex-column'
                                            style={{ marginLeft: '40px' }}
                                        >
                                            <p class='card-text'>
                                                Insurance: Mutual Life
                                            </p>
                                            <p class='card-text'>
                                                Phone Number: 8888888888
                                            </p>
                                            <p class='card-text'>
                                                Address: 14 York Street
                                            </p>
                                            <p class='card-text'>
                                                Family Doctor: Dr Singerman
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};
