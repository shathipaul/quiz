import React from 'react';

const Question = ({questionD}) => {
    const {question, options} = questionD;
    return (
        <div className='w-4/5 m-auto'>
            <div className='bg-blue-50 mb-5'>
            <h2 className='text-xl font-bold text-blue-700'>{question.slice (3, -4)}</h2>
            {
                options.map(option => <li>{option}</li>)
            }
            </div>
            
        </div>
    );
};

export default Question;