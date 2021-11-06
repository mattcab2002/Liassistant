import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const GuardianLoginModal = () => {
    return (
        <div
            className='modal fade'
            id='guardianLoginModal'
            tabindex='-1'
            role='dialog'
            aria-labelledby='exampleModalCenterTitle'
            aria-hidden='true'
        >
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLongTitle'>
                            Guardian Login
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
                        <form>
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
                            <a
                                data-target='#signUpModal'
                                data-toggle='modal'
                                href='#signUpModal'
                                data-dismiss='modal'
                            >
                                <p>Sign Up Here!</p>
                            </a>
                        </form>
                    </div>
                    <div className='modal-footer' style={{ width: '100%' }}>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            data-dismiss='modal'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
