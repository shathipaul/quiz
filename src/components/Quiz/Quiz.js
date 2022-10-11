import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz;
    return (
        <div className='border-2 rounded border-sky-500 bg-slate-500 flex flex-col justify-center '>
            <div>
            <img className='w-52' src={logo} alt="" />
            </div>
            <div className='m-2'>
            <h3 className='text-xl'>Topic: {name}</h3>
            <p>Total Quiz: {total}</p>
            <Link to={`/${id}`}>
            <button type="button" className="px-5 py-2 font-semibold rounded-lg bg-gray-100 text-gray-800">Go to Quiz</button>
            </Link>
            
            </div>
           
        </div>
    );
};

export default Quiz;