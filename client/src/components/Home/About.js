import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const About = () => {
    return (
        <section id='about'>
            <div className='col-sm-6 p-3'>
                <div
                    className='card'
                    style={{ borderRadius: '14px', marginLeft: '25%' }}
                >
                    <div className='card-body'>
                        <h5 className='card-title'>About Memory Loss</h5>
                        <p className='card-text' style={{ fontSize: '1.4em' }}>
                            Memory loss (amnesia) is a type of forgetfulness
                            that occurs often. You can be unable to recall
                            recent events, one or many old recollections, or
                            both. Memory loss may occur for a brief period and
                            then disappear. It may not go away, or it may worsen
                            over time, depending on the source. In extreme
                            situations, memory loss might make it difficult to
                            carry out daily tasks. Memory loss, caused by
                            neurodegeneration, brain trauma or surgical
                            interventions are affecting millions of people every
                            day. It can range from forgetfulness to impaired
                            cognitive functions. Patients suffering from various
                            neurodegenerative diseases such as Alzheimer’s,
                            dementia and multiple sclerosis will often have, to
                            a certain degree, difficulties in everyday life,
                            this where our AI, “Lia” aims to provide aid to
                            those suffering from amnesia by serving as an
                            assisted memory retrieval.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
