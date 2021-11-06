import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProjectInfo = () => {
    return (
        <section id='our-initiative' class='m-4'>
            <div class='row'>
                <div class='col-sm-6'>
                    <div class='card' style={{ borderRadius: '14px' }}>
                        <div class='card-body'>
                            <h5 class='card-title'>AI</h5>
                            <p class='card-text'>
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a
                                href='https://github.com/mattcab2002/newhacksproject/api'
                                class='btn btn-primary'
                            >
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div class='col-sm-6'>
                    <div class='card' style={{ borderRadius: '14px' }}>
                        <div class='card-body'>
                            <h5 class='card-title'>This Page</h5>
                            <p class='card-text'>
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a
                                href='https://github.com/mattcab2002/newhacksproject/website'
                                class='btn btn-primary'
                            >
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
