import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';



const Header = () => {
    return (
        <div className=''>
            <nav className="flex justify-between items-center h-14 my-2 shadow-lg" >
                <div>
                    <img className="h-14 ml-16" src={logo} alt="" />
                </div>
                <div className=" text-blue-900 font-bold text-lg mr-5">
                <Link className='mr-5' to= '/'>Home</Link>
                <Link className='mr-5' to= '/chart'>Chart</Link>
                <Link to= '/blog'>Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;