import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'



const Question = ({questionD}) => {
    const {question, options, correctAnswer} = questionD;
    return (
        <div className='w-4/5 m-auto'>
            <div className='bg-blue-50 mb-5'>
            <h2 className='text-xl font-bold text-blue-700'>{question.slice (3, -4)}</h2>
            <EyeIcon className="h-6 w-6 text-blue-900 m-auto"></EyeIcon>
            
            {
                options.map(option => <li className='decoration-0'><input type="radio" />{option}</li>)
            }
            </div>
            
        </div>
    );
};

export default Question;