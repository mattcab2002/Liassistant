import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProjectInfo = () => {
    return (
        <section id='our-initiative' class='m-4'>
            <div class='row'>
                <div class='col-sm-6'>
                    <div
                        class='card'
                        style={{
                            borderRadius: '14px',
                            width: '90%',
                            marginLeft: '50px',
                        }}
                    >
                        <div class='card-body'>
                            <h5 class='card-title'>AI</h5>
                            <p class='card-text'>
                                Lia is made to be an assistant for people who
                                are suffering memory loss at any stage in their
                                life. It does so by using artificial
                                intelligence and a chat service by choosing the
                                best response for a given question. We built
                                Lia’s AI using python and JSON. We want to
                                expand Lia, so it is extremely adaptable, for
                                example build an apple watch app for it. Make
                                the AI even more powerful and in general quicker
                                than what it is right now. The application has
                                the potential to implement deep learning and an
                                AI model that learns about the patient during
                                his life.
                            </p>
                            <a
                                href='https://github.com/mattcab2002/Liassitant/AI'
                                class='btn btn-primary'
                            >
                                See Code
                            </a>
                        </div>
                    </div>
                </div>
                <div class='col-sm-6'>
                    <div
                        class='card'
                        style={{
                            borderRadius: '14px',
                            width: '90%',
                        }}
                    >
                        <div class='card-body'>
                            <h5 class='card-title'>This Page</h5>
                            <p class='card-text'>
                                The website was built using MERN stack which
                                stands for MongoDB, Express, React, Node. The
                                website serves as a login page for users so they
                                can access accessments in the form of screenings
                                for a patient or loved one who may suffer from
                                memory loss. Eventually the user will be able to
                                see the progression of the patient or loved one
                                based off how well they remember more and more
                                terms through their screenings. Also, the
                                website has a listen channel (':userid') where
                                eventually the AI will be able to use the
                                auditory response from the patient, parse it,
                                and relay it back to someone who is listneing on
                                the channel (':userid/listen')
                            </p>
                            <a
                                href='https://github.com/mattcab2002/Liassistant'
                                class='btn btn-primary'
                            >
                                See Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
