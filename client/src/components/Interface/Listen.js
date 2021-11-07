import React from 'react';

export const Listen = () => {
    const questions = [
        {
            question: 'What is your favorite book?',
            answer: 'Harry Potter Series',
        },
        {
            question: 'What is your favorite color?',
            answer: 'Blue',
        },
        {
            question: 'What is your favorite hobby?',
            answer: 'Chess',
        },
    ];
    // meant to retrieve form db
    // fetch('http://localhost:4000')
    //     .then((res) => res.json())
    //     .then((result) => {
    //         console.log(result);
    //     });
    return (
        <div className='p-3 mt-5'>
            {questions.map((q) => (
                <div style={{ fontSize: '1.25em' }}>
                    <p>Question: {q.question}</p>
                    <p>Answer: {q.answer}</p>
                </div>
            ))}
        </div>
    );
};
