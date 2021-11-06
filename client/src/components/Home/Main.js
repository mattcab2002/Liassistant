import React, { useState } from 'react';
import AlzImage from '../../images/Alzheimer-Patient.jpeg';
import './styling/Main.css';
import { GuardianLoginModal } from './modals/GuardianLoginModal';
import { GuardianSignUpModal } from './modals/GuardianSignUpModal';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Main = () => {
    return (
        <section>
            <div className='middle-content'>
                <img
                    src={AlzImage}
                    alt="Image of Alzheimer's Patient"
                    id='main-image'
                />
                <div className='btn-wrapper'>
                    <Link to='/sign-up'>
                        <button
                            type='button'
                            className='btn btn-primary'
                            data-toggle='modal'
                            data-target='#guardianSignUpModal'
                        >
                            Sign Up as Guardian
                        </button>
                    </Link>
                    <Link to='/guardian'>
                        <button
                            type='button'
                            className='btn btn-primary'
                            data-toggle='modal'
                            data-target='#guardianLoginModal'
                        >
                            Login as Guardian
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
