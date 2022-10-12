import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz;
    return (
        <div className='border-2 rounded border-blue-900 bg-blue-100 flex flex-col justify-center '>
            <div>
            <img className='w-4/12 m-auto pt-2' src={logo} alt="" />
            </div>
            <div className='m-2'>
            <h3 className='text-lg'>Topic: {name}</h3>
            <p>Total Quiz: {total}</p>
            <Link to={`${id}`}>
            <button type="button" className="px-5 py-2 font-semibold rounded-lg bg-gray-50 text-blue-900">Go to Quiz</button>
            </Link>
            
            </div>
           
        </div>
    );
};

export default Quiz;