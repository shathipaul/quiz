import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className='rounded-lg bg-pink-400 flex flex-col justify-center pt-2 '>
            <div>
                <img className='w-4/12 m-auto' src={logo} alt="" />
            </div>
            <div className='text-center text-color font-bold p-4'>
                <h3 className='text-xl '>Topic: {name}</h3>
                <p className='py-1'>Total Quiz: {total}</p>
                <Link to={`${id}`}>
                    <button type="button" className="px-5 py-2 mt-2 font-semibold rounded-lg bg-gray-50 text-color">Go to Quiz</button>
                </Link>

            </div>

        </div>
    );
};

export default Quiz;