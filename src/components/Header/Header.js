import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav className="h-16 bg-slate-400">
                <img src="" alt="" />
                <Link to= '/'>Home</Link>
                <Link to= '/chart'>Chart</Link>
                <Link to= '/blog'>Blog</Link>
            </nav>
            <div>

            </div>
        </div>
    );
};

export default Header;