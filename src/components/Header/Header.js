import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import img from '../../images/quiz.jpg';


const Header = () => {
    return (
        <div>
            <nav className="flex justify-between items-center h-14 bg-slate-400" >
                <div>
                    <img className="h-14" src={logo} alt="" />
                </div>
                <div className=" text-white mr-5">
                <Link to= '/'>Home</Link>
                <Link to= '/chart'>Chart</Link>
                <Link to= '/blog'>Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;