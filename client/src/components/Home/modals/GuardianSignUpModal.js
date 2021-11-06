import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const GuardianSignUpModal = () => {
    return (
        <div
            className='modal fade'
            id='guardianSignUpModal'
            tabindex='-1'
            role='dialog'
            aria-labelledby='exampleModalCenterTitle'
            aria-hidden='true'
        >
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLongTitle'>
                            Sign Up
                        </h5>
                        <button
                            type='button'
                            className='close'
                            data-dismiss='modal'
                            aria-label='Close'
                        >
                            <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <p>Are you a ...</p>
                        <form>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='exampleRadios'
                                    id='exampleRadios1'
                                    value='option1'
                                    checked
                                />
                                <label
                                    className='form-check-label'
                                    for='exampleRadios1'
                                >
                                    Patient
                                </label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='exampleRadios'
                                    id='exampleRadios2'
                                    value='option2'
                                />
                                <label
                                    className='form-check-label'
                                    for='exampleRadios2'
                                >
                                    Guardian
                                </label>
                            </div>
                            <br />
                            <div className='form-group'>
                                <label for='exampleInputEmail1'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='johndoe@gmail.com'
                                />
                            </div>
                            <div className='form-group'>
                                <label for='exampleInputPassword1'>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                    placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                                />
                            </div>
                            <div className='form-group'>
                                <label for='exampleInputPassword1'>
                                    Confirm Password
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                    placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                                />
                            </div>
                        </form>
                    </div>
                    <div className='modal-footer' style={{ width: '100%' }}>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            data-dismiss='modal'
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
