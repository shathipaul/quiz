import React from 'react';

const Quiz = ({quiz}) => {
    const {name, logo, total} = quiz;
    return (
        <div className='border-2 rounded border-sky-500 bg-slate-500 p-3'>
            <img className='h-40 w-52' src={logo} alt="" />
            <div>
            <h3>Topic: {name}</h3>
            <p>Total Quiz: {total}</p>
            </div>
            <button type="button" className="px-5 py-2 font-semibold rounded-lg bg-gray-100 text-gray-800">Go to Quiz</button>
        </div>
    );
};

export default Quiz;