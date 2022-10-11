import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-5/12 m-auto' src={img} alt="" />
            <Link className="px-5 py-2 font-semibold rounded-lg bg-blue-900 text-gray-100" to='/'>
            <button >Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;