import React from 'react';
import { toast } from 'react-toastify';

const Question = ({ questionD }) => {
    const { question, options, correctAnswer } = questionD;


    const handleOption = (rr) => {

        if (correctAnswer === rr) {
            toast('Answer is correct')
        }
        else {
            toast('Wrong Answer')
        }
    }
    return (
        <div className='px-8 lg:px-24 '>
            <div className='bg-pink-400 mt-5 rounded-xl'>
                <h2 className='text-center text-2xl font-bold pt-5 text-color'>{question.slice(3, -4)}</h2>


                <div className='flex flex-wrap justify-evenly py-10'>
                    {
                        options.map(option => <p onClick={() => handleOption(option)} className='text-lg font-semibold '><input className='mr-2' type="checkbox" />{option}</p>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Question;