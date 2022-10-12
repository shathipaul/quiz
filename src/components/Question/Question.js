import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Question = ({questionD}) => {
    const {question, options, correctAnswer} = questionD;
    const handleEye = (correctAnswer) =>{
        toast(`Correct Answer: ${correctAnswer}`);
    }
    
    const handleOption = (rr) =>{
        
        if(correctAnswer === rr){
            toast('Answer is correct')
        }
        else{
            toast('Wrong Answer')
        }
    }
    return (
        <div className='w-4/5 m-auto'>
            <div className='bg-blue-50 mb-5'>
            <h2 className='text-xl font-bold text-blue-700'>{question.slice (3, -4)}</h2>
            <EyeIcon onClick={() => handleEye(correctAnswer)} className="h-6 w-6 text-blue-900 m-auto"></EyeIcon>
            
            {
                options.map(option => <p onClick={() => handleOption(option)} className='decoration-0'><input type="radio" />{option}</p>)
            }
            </div>
            
        </div>
    );
};

export default Question;